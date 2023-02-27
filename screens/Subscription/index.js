import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction from "../../redux/users/action";
import api from "../../config/api";
import "./index.css";
import ButtonComp from "../../components/Button";
import Loader from "../../components/Loader";

const Subscription = (props) => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    props.getToken();
    fetchALlSubscription();
  }, []);

  const fetchALlSubscription = async () => {
    try {
      setLoader(true)
      const response = await api.getUserSubscribeAll({
        userID: user?.user?._id
      });
      setData(response.msg);
      console.log(response.msg);
      setLoader(false)
    } catch (e) {
      console.log(e);
      setLoader(false)
    }
  };

  const toLocalDate = (date) => {
    const dateCon = new Date(date)
    return dateCon.toLocaleString();
  }

  return (
    <div className="container">
      <div className="row main-container-login">
        <div className="col head-logout">
          <h1>All Subscription</h1>
          <ButtonComp onClick={props.logout} label="logout" />
        </div>
        <table class="table table-striped tab-prod">
          <thead class="thead-light">
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Subscription Amount</th>
              <th scope="col">Subscribed By</th>
              <th scope="col">Start Time</th>
              <th scope="col">Next Payment</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td scope="row">{item?.productId?.name}</td>
                <td scope="row">{item?.productId?.amount / 10 **18 +"$"}</td>
                <td scope="row">{item?.address.slice(0,5) + "..." + item?.address?.slice(-5)}</td>
                <td scope="row">{toLocalDate(item?.startDate)}</td>
                <td scope="row">{toLocalDate(item?.endDate)}</td>
                <td scope="row">{item?.status == 0 ? "Pending" : "Active"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loader && 
      <Loader />
      }
    </div>
  );
};

export default Subscription;
