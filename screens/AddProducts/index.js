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

const AddProducts = (props) => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    time: false,
  });
  const user = useSelector((state) => state.userReducer.users);

  useEffect(()=> {
    props.getToken()
  },[])

  const onSubmit = async () => {
    try {
      setLoader(true)
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
      const response = await api.createProduct(payload);

      console.log(response);
      setLoader(false)
      alert(response.msg);
    } catch (e) {
      console.warn(data);
      setLoader(false)
      console.log(e);
      alert(e.message);
    }
  };

  const validation = async () => {
    if (!data.name) {
      return "Product name is required";
    }
    if (!data.amount) {
      return "Product Amount is required";
    }
    if (!data.token) {
      return "Token is required";
    }
    if (data.time == false) {
      return "Subscription Time is required";
    }
    if (!data.unit) {
      return "Subscription Unit is required";
    }
    if (
      data.time > 1000 
    ) {
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
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("amount", e.target.value)}
            label={"Please enter Product amount"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            disabled={true}
            value={user?.merchant?.wallet}
            label={"Merchant address"}
          />
        </div>
        <div className="col input-cont-login">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Token</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              onChange={(e) => onInputChange("token", e.target.value)}
              id="demo-simple-select"
              label="Select Token"
            >
              <MenuItem value={process.env.REACT_APP_USDT_ADDRESS}>
                USDT
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col input-cont-login-flex">
          <div className="select-1-field">
            <OutlinedInput
              onChange={(e) => onInputChange("time", e.target.value)}
              label={"Please enter Time Period"}
            />
          </div>
          <div className="select-1-selectinp">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Unit</InputLabel>
              <Select
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
            <ButtonComp onClick={onSubmit} label={"Create Product"} />
          </div>
          <div>
            <ButtonComp
              onClick={()=> navigate('/products')}
              label={"View Products"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={()=> navigate('/subscription')}
              label={"View Subscriptions"}
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
              onClick={props.logout}
              label={"Logout"}
            />
          </div>
        </div>
      </div>
      {loader && 
      <Loader />
      }
    </div>
  );
};

export default AddProducts;
