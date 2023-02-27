import React, { useState } from "react";
import ButtonComp from "../../components/Button";
import OutlinedInput from "../../components/OutlinedInput";
import api from "../../config/api";
import "./index.css";
import { getAccount, web3Initializer } from "../../helpers/metamask";
import web3Object from "../../web3/web3";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const Register = (props) => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      setLoader(true);
      const validatorResponse = await validation();

      if (validatorResponse) {
        throw new Error(validatorResponse);
      }

      const payload = {
        ...data,
        role: 1,
      };
      const response = await api.register(payload);

      console.log(response);
      setLoader(false);
      alert(response.msg);
      // navigate('/')
    } catch (e) {
      console.warn(data);
      setLoader(false);
      console.log(e);
      alert(e.message);
    }
  };

  const validation = async () => {
    if (!data.email) {
      return "Email is required";
    }
    if (!data.username) {
      return "Username is required";
    }
    if (!data.firstName) {
      return "First name is required";
    }
    if (!data.lastName) {
      return "Last name is required";
    }
    if (!data.password) {
      return "Password is required";
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
          <h1>Register your merchant account</h1>
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("email", e.target.value)}
            type={"email"}
            label={"Please enter email"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("username", e.target.value)}
            label={"Please enter username"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("firstName", e.target.value)}
            label={"Please enter first name"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("lastName", e.target.value)}
            label={"Please enter last name"}
          />
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("wallet", e.target.value)}
            label={"Wallet"}
            value={data?.wallet}
          />
        </div>

        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("password", e.target.value)}
            type={"password"}
            label={"Please enter password"}
          />
        </div>
        <div className="col button-cont-login">
          <div>
            <ButtonComp
              disabled={!data.wallet}
              onClick={onSubmit}
              label={"Click here to register"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/")}
              label={"Click here to login"}
            />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/register/step1")}
              label={"Click here to Register with subscription"}
            />
          </div>
        </div>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Register;
