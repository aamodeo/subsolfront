import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction from "../../redux/users/action";
import api from "../../config/api";
import "./index.css";
import ButtonComp from "../../components/Button";
import Loader from "../../components/Loader";
import copy from 'copy-to-clipboard';

const Products = (props) => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.userReducer.users);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    props.getToken();
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      setLoader(true);
      const response = await api.getAllProduct();
      setData(response.product);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };

  const generateIframe = (item) => {
    const iframe = `<iframe src="${process.env.REACT_APP_CLIENT}/product/checkout/?pid=${item._id}" name="Subscription Pay" scrolling="auto" width="500px" height="400px" style="border: 0.5px groove #3b3b3b;"></iframe>`;
    alert("Copied")
    copy(iframe);
  };

  const generateLink = (item) => {
    const link = process.env.REACT_APP_CLIENT + "/product/checkout/?pid=" + item?._id;
    alert("Copied")
    copy(link);
  };

  return (
    <div className="container">
      <div className="row main-container-login">
        <div className="col head-logout">
          <h1>All Products</h1>
          <ButtonComp onClick={props.logout} label="logout" />
        </div>
        <table class="table table-striped tab-prod">
          <thead class="thead-light">
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Amount</th>
              <th scope="col">Recurring Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td scope="row">{item?._id}</td>
                <td scope="row">{item?.name}</td>
                <td scope="row">{item?.amount / 10 ** 18}</td>
                {item?.unit == 0 && (
                  <td scope="row">{item?.time + " " + "Minutes"}</td>
                )}
                {item?.unit == 1 && (
                  <td scope="row">{item?.time + " " + "Hours"}</td>
                )}
                {item?.unit == 2 && (
                  <td scope="row">{item?.time + " " + "Days"}</td>
                )}
                {item?.unit == 3 && (
                  <td scope="row">{item?.time + " " + "Weeks"}</td>
                )}
                {item?.unit == 4 && (
                  <td scope="row">{item?.time + " " + "Months"}</td>
                )}
                {item?.unit == 5 && (
                  <td scope="row">{item?.time + " " + "Years"}</td>
                )}
                <td>
                  <div className="buttons-product-actions">
                    <div>
                      <ButtonComp
                        label="Copy Link"
                        onClick={() => generateLink(item)}
                      />
                    </div>
                    <div>
                      <ButtonComp
                        label="Copy Iframe"
                        onClick={() => generateIframe(item)}
                      />
                    </div>
                    <div>
                      <ButtonComp
                        label="Edit Product"
                        onClick={() =>
                          navigate(`/product/edit/?pid=${item?._id}`)
                        }
                      />
                    </div>
                    <div>
                      <ButtonComp
                        label="History"
                        onClick={() =>
                          navigate(`/transaction/?pid=${item?._id}`)
                        }
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default Products;
