import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction from "../../redux/users/action";
import api from "../../config/api";
import "./index.css";
import ButtonComp from "../../components/Button";
import Loader from "../../components/Loader";

const Transaction = (props) => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.userReducer.users);
  const [loader, setLoader] = useState(false);
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

      await fetchAllTrans(pid);
      setLoader(false);
      console.log(response);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  const fetchAllTrans = async (pid) => {
    try {
      setLoader(true);

      const payload = {
        product: pid,
      };
      const response = await api.fetchTransaction(payload);

      setData(response.msg);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  const formatDate = (dateParam) => {
    const date = new Date(dateParam);
    return date.toLocaleString();
  };

  return (
    <div className="container">
      <div className="row main-container-login">
        <div className="col head-logout">
          <h1>Transactions</h1>
          <ButtonComp onClick={props.logout} label="logout" />
        </div>
        <table class="table table-striped tab-prod">
          <thead class="thead-light">
            <tr>
              <th scope="col">Transaction Id</th>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Amount</th>
              <th scope="col">Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td scope="row">
                  <a
                    href={"https://testnet.bscscan.com/tx/" + item?.transactionId}
                    target={"_blank"}
                  >
                    {item?.transactionId?.slice(0,5) + "..." + item?.transactionId?.slice(-5)}
                  </a>
                </td>
                <td scope="row">{item?._id}</td>
                <td scope="row">{item?.product?.name}</td>
                <td scope="row">{item?.product?.amount / 10 ** 18}</td>
                <td scope="row">{formatDate(item?.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Transaction;
