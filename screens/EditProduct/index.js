import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../components/Button";
import Loader from "../../components/Loader";
import OutlinedInput from "../../components/OutlinedInput";
import api from "../../config/api";
import "./index.css";
import bigNumber from "bignumber.js";

const EditProduct = (props) => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    time: false,
  });
  const [merchant, setMerchant] = useState([]);
  const [wallet, setWallet] = useState(null);
  const user = useSelector((state) => state.userReducer.users);

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

      response.product.amount = response.product.amount / 10 ** 18
      setMerchant(response.merchant);
      setData(response.product);
      console.log(response.product?.token?.toString());
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  const onSubmit = async () => {
    try {
      setLoader(true);
      const validatorResponse = await validation();

      if (validatorResponse) {
        throw new Error(validatorResponse);
      }

      const price = new bigNumber (data.amount * 1000000000000000000)
      const payload = {
        ...data,
        amount: price,
        unit: data.unit - 1,
      };
      const response = await api.editProduct(payload);

      console.log(response);
      setLoader(false);
      alert(response);
    } catch (e) {
      console.warn(data);
      setLoader(false);
      console.log(e);
      alert(e);
    }
  };

  const validation = async () => {
    if (!data.name) {
      return "Product name is required";
    }
    if (!data.amount) {
      return "Product Amount is required";
    }
    if (data.time == false) {
      return "Subscription Time is required";
    }
    if (!data.unit) {
      return "Subscription Unit is required";
    }
    if (data.time > 1000) {
      return "Subscription Time should not exceed 1000";
    }

    return false;
  };

  const onInputChange = async (label, value) => {
    setData({ ...data, [label]: value });
  };

  return (
    <div className="container">
      <div className="row main-container-login">
        <div className="col">
          <h1>Create your product</h1>
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("name", e.target.value)}
            label={"Please enter Product name"}
            value={data?.name}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("amount", e.target.value)}
            label={"Please enter Product amount"}
            value={data?.amount}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            disabled={true}
            value={merchant?.wallet}
            label={"Merchant address"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            disabled={true}
            value={data?.token == process.env.REACT_APP_USDT_ADDRESS ? "USDT" : null}
            label={"Token address"}
          />
        </div>

        <div className="col input-cont-login-flex">
          <div className="select-1-field">
            <OutlinedInput
              value={data?.time}
              onChange={(e) => onInputChange("time", e.target.value)}
              label={"Please enter Time Period"}
            />
          </div>
          <div className="select-1-selectinp">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Unit</InputLabel>
              <Select
                value={parseInt(data?.unit)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Unit"
                onChange={(e) => onInputChange("unit", e.target.value)}
              >
                <MenuItem value={1}>Minutes</MenuItem>
                <MenuItem value={2}>Hours</MenuItem>
                <MenuItem value={3}>Days</MenuItem>
                <MenuItem value={4}>Weeks</MenuItem>
                <MenuItem value={5}>Months</MenuItem>
                <MenuItem value={6}>Years</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="col button-cont-login">
          <div>
            <ButtonComp onClick={onSubmit} label={"Edit Product"} />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/")}
              label={"Create Products"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/products")}
              label={"View Products"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={()=> navigate('/transaction/all')}
              label={"History"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/subscription")}
              label={"View Subscriptions"}
            />
          </div>
          <div>
            <ButtonComp onClick={props.logout} label={"Logout"} />
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default EditProduct;
