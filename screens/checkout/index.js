import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import userAction from "../../redux/users/action";
import api from "../../config/api";
import "./index.css";
import ButtonComp from "../../components/Button";
import { getAccount, web3Initializer } from "../../helpers/metamask";
import web3Object from "../../web3/web3";
import USDTContract from "../../abi/usdt.json";
import SubscriptionContract from "../../abi/subscription.json";
import bigNumber from "bignumber.js";
import Loader from "../../components/Loader";

const ProductCheckout = (props) => {
  const [data, setData] = useState([]);
  const [merchant, setMerchant] = useState([]);
  const [wallet, setWallet] = useState(null);
  const [loader, setLoader] = useState(false);
  const [approved, setApprove] = useState(true);
  const [subscription, setSubscription] = useState([true]);
  const [subscribed, setSubscribed] = useState(false);
  const user = useSelector((state) => state.userReducer.users);
  const navigate = useNavigate();

  useEffect(() => {
    props.getToken();
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoader(true);
      const params = new URL(document.location).searchParams;
      const pid = params.get("pid");

      if (!pid) {
        navigate("/");
      }

      const payload = {
        _id: pid,
      };
      const response = await api.getAllProductByID(payload);

      if (!response.product) {
        navigate("/");
      }

      setMerchant(response.merchant);
      setData(response.product);
      setLoader(false);
      console.log(response);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  const isSubscribed = async (wallet) => {
    try {
      setLoader(true);
      const params = new URL(document.location).searchParams;
      const pid = params.get("pid");

      if (!pid) {
        navigate("/");
      }

      const payload = {
        productId: pid,
        address: wallet,
      };
      const response = await api.getUserSubscribe(payload);

      if (response.msg) {
        setSubscribed(true);
      } else {
        await isApproved(wallet);
      }

      setSubscription(response.msg);
      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };

  const connectMetamask = async () => {
    try {
      setLoader(true);
      await web3Initializer();

      const userWalletId = await getAccount();

      if (!userWalletId) {
        throw new Error("Unable to connect user, Metamask error.");
      }

      const chainId = await web3Object.web3.eth.getChainId();

      if (parseInt(chainId) != parseInt(process.env.REACT_APP_CHAIN_ID)) {
        alert.show("Please connect to Binance Test Network");
        throw new Error("Please connect to Binance Test Net");
      }

      const signature = await web3Object.web3.eth.personal.sign(
        `I am signing to subscribe this product membership from my account: ${data._id}`,
        userWalletId,
        ""
      );

      if (!signature) {
        throw new Error("Unable to connect user, Signature denied.");
      }

      setWallet(userWalletId);
      await isSubscribed(userWalletId);
      setLoader(false);
    } catch (e) {
      alert("Error while connection with Wallet");
      setLoader(false);
    }
  };

  const subscribeUsingCrypto = async () => {
    try {
      setLoader(true);
      const walletAddress = wallet;
      const params = new URL(document.location).searchParams;
      const pid = params.get("pid");

      if (!pid) {
        navigate("/");
      }

      const subsContract = new web3Object.web3.eth.Contract(
        SubscriptionContract,
        process.env.REACT_APP_SUBSCRIPTION_ADDRESS
      );

      // const time = Math.floor(new Date().getTime() / 1000) + 1000;

      const subscriptionResp = await subsContract.methods
        .generateSubscription(
          merchant.wallet,
          process.env.REACT_APP_USDT_ADDRESS,
          data.amount,
          parseInt(data.unit),
          data.time
        )
        .send({ from: walletAddress });

      const payload = {
        productId: pid,
        address: wallet,
        subscriptionId:
          subscriptionResp.events?.AddedSubscriber?.returnValues
            ?._subscriptionId,
        userID: data.userID,
      };
      const subscribeAPI = await api.subscribe(payload);

      console.log(subscribeAPI.msg._id);
      console.log(subscriptionResp?.events?.AddedSubscriber?.transactionHash);

      const payloadTransaction = {
        product: pid,
        user: data.userID,
        address: wallet,
        subscription: subscribeAPI.msg._id,
        transactionId: subscriptionResp?.events?.AddedSubscriber?.transactionHash
      };
      const transactionsCreate = await api.createTransaction(
        payloadTransaction
      );

      await isSubscribed(wallet);
      alert("Subscription Created");
      setLoader(false);
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };

  const isApproved = async (walletiid) => {
    try {
      setLoader(true);
      const walletAddress = walletiid;

      console.log("Wallet", walletAddress);
      console.log(
        "Subscription Address",
        process.env.REACT_APP_SUBSCRIPTION_ADDRESS
      );
      console.log("USDT Address", process.env.REACT_APP_USDT_ADDRESS);
      console.log("USDT CON", USDTContract);

      const usdtContract = new web3Object.web3.eth.Contract(
        USDTContract,
        process.env.REACT_APP_USDT_ADDRESS
      );
      const checkApproved = await usdtContract.methods
        .allowance(walletAddress, process.env.REACT_APP_SUBSCRIPTION_ADDRESS)
        .call();
      const approvedAmount = parseInt(checkApproved) / 10 ** 18;

      if (parseFloat(approvedAmount) > (parseFloat(data.amount) * 2)) {
        setApprove(false);
      }

      console.log(approvedAmount);
      setLoader(false);
    } catch (e) {
      console.log(e);
      alert("Error while checking approved");
      setLoader(false);
    }
  };

  const approveAllowance = async () => {
    try {
      setLoader(true);
      const walletAddress = wallet;

      console.log("Wallet", walletAddress);
      console.log("USDT Address", process.env.REACT_APP_USDT_ADDRESS);
      console.log(
        "Subscription Address",
        process.env.REACT_APP_SUBSCRIPTION_ADDRESS
      );
      console.log("USDT Con", USDTContract);

      const usdtContract = new web3Object.web3.eth.Contract(
        USDTContract,
        process.env.REACT_APP_USDT_ADDRESS
      );
      let balance = await usdtContract.methods.balanceOf(walletAddress).call();
      balance = balance;
      const subsVal = parseInt(data.amount);

      if (parseInt(balance) <= subsVal) {
        throw new Error("Insufficient Balance");
      }

      const amountOfApp = parseFloat(data.amount) * 2
      const amountToApprove = new bigNumber(amountOfApp * 10 ** 18);
      const approvalResponse = await usdtContract.methods
        .approve(process.env.REACT_APP_SUBSCRIPTION_ADDRESS, amountToApprove)
        .send({ from: walletAddress });

      console.log(approvalResponse);
      setApprove(false);
      setLoader(false);
    } catch (e) {
      console.log(e);
      alert("Error while approving");
      setLoader(false);
    }
  };

  const cancelSubscription = async () => {
    try {
      setLoader(true);
      console.log("Cancel");
      console.log(SubscriptionContract);
      console.log(process.env.REACT_APP_SUBSCRIPTION_ADDRESS);
      console.log(subscription.subscriptionId);
      console.log(wallet);

      const subsContract = new web3Object.web3.eth.Contract(
        SubscriptionContract,
        process.env.REACT_APP_SUBSCRIPTION_ADDRESS
      );
      const subscriptionResp = await subsContract.methods
        .cancelSubscription(subscription.subscriptionId)
        .send({ from: wallet });

      const payload = {
        address: wallet,
        productId: data._id,
      };
      const deleteresp = await api.delteSubscription(payload);

      console.log(subscriptionResp.transactionHash);
      window.location.reload();
      await fetchProduct();
      await isSubscribed(wallet);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="row main-container-login">
        <div className="col head-logout">
          <h1>Checkout Products</h1>
        </div>
        <div class="card-body bodyofCard">
          <h2 class="card-title">Name: {data?.name}</h2>
          <h3 class="card-subtitle mb-2 text-muted">
            Amount: {data.amount / 10 ** 18}$
          </h3>
          {data?.unit == 0 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Minutes"}
            </p>
          )}
          {data?.unit == 1 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Hours"}
            </p>
          )}
          {data?.unit == 2 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Days"}
            </p>
          )}
          {data?.unit == 3 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Weeks"}
            </p>
          )}
          {data?.unit == 4 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Months"}
            </p>
          )}
          {data?.unit == 5 && (
            <p class="card-text">
              Subscription Duration: {data?.time + " " + "Years"}
            </p>
          )}
          {!subscribed && (
            <div className={"d-flex button-cont-login"}>
              {!wallet && (
                <div>
                  <ButtonComp onClick={connectMetamask} label={"Connect"} />
                </div>
              )}
              <div>
                {" "}
                {wallet && approved && (
                  <ButtonComp onClick={approveAllowance} label={"Approve"} />
                )}
              </div>
              <div>
                <ButtonComp
                  disabled={!wallet || approved}
                  onClick={subscribeUsingCrypto}
                  label={"Subscribe"}
                />
              </div>
            </div>
          )}

          {subscribed && (
            <div className={"d-flex button-cont-login"}>
              <div>
                <ButtonComp disabled={true} label={"Subscribed"} />
              </div>
              <div>
                <ButtonComp
                  onClick={cancelSubscription}
                  label={"Cancel Subscription"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default ProductCheckout;
