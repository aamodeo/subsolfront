import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction from "../../redux/users/action";
import ButtonComp from "../../components/Button";
import OutlinedInput from "../../components/OutlinedInput";
import api from "../../config/api";
import "./index.css";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { setUser } = userAction;

  const onSubmit = async () => {
    try {
      const validatorResponse = await validation();
      setLoader(true)

      if (validatorResponse) {
        throw new Error(validatorResponse);
      }

      const payload = {
        username: data.username,
        password: data.password,
      };
      const response = await api.login(payload);
      await dispatch(setUser(response));

      if (response.msg) {
        alert(response.msg);
      } else {
        alert(response.error);
      }

      axios.defaults.headers.common["Authorization"] = response.token;
      console.log(response.token);
      navigate("/add-product");
      setLoader(false)
    } catch (e) {
      console.warn(data);
      console.log(e);
      setLoader(false)
      alert(e.message);
    }
  };

  const validation = async () => {
    if (!data.username) {
      return "Username is required";
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
          <h1>Login to your merchant account</h1>
        </div>
        <div className="col input-cont-login">
          <OutlinedInput
            onChange={(e) => onInputChange("username", e.target.value)}
            label={"Please enter username"}
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
            <ButtonComp onClick={onSubmit} label={"Click here to login"} />
          </div>
          <div>
            <ButtonComp
              onClick={() => navigate("/register")}
              label={"Click here to register"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
