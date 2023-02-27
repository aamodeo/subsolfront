import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Analytics } from "../components/dashboardAdmin/analytics/analytics";
import { DashboardAdmin } from "../components/dashboardAdmin/dashboard/dashboardAdmin";
import { Merchant } from "../components/dashboardAdmin/Merchant/merchant";
// import { BrowserRouter,useNavigate, BrowserRouter as Router,Route,Switch } from "react-router-dom";

import Navbar from "../components/dashboardMain/global/navbar/navbar";
import Sidebar from "../components/dashboardMain/global/sidebar/sidebar";
import AppRouter from "../components/dashboardMain/route/route";
import { LoginNew } from "../components/Login/login";
import { RegisterNew } from "../components/Register/register";

import userAction from "../redux/users/action";
import AddProducts from "../screens/AddProducts";
import AllTransaction from "../screens/AllTransaction";
import ProductCheckout from "../screens/checkout";
import EditProduct from "../screens/EditProduct";
import Login from "../screens/Login";
import Products from "../screens/Products";
import Register from "../screens/Register";
import Subscription from "../screens/Subscription";
import Transaction from "../screens/Transaction";

const Router1 = () => {
  const user = useSelector((state) => state.userReducer.users);
  const { setUser } = userAction;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLogin,setUserLogin] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = user?.token;

    if (user?.token) {
      if (
        window.location.pathname == "/login" ||
        window.location.pathname == "/register" ||
        window.location.pathname == "/"
      ) {
        navigate("/add-product");
      }
    }

    if (!user?.token) {
      if (window.location.pathname == "/product/checkout/") {
        const params = new URL(document.location).searchParams;
        const pid = params.get("pid");

        if (pid) {
          navigate(`/product/checkout/?pid=${pid}`);
        }

        return;
      }
      if (window.location.pathname == "/transaction/") {
        const params = new URL(document.location).searchParams;
        const pid = params.get("pid");

        if (pid) {
          navigate(`/transaction/?pid=${pid}`);
        }

        return;
      }
      if (window.location.pathname == "/product/edit/") {
        const params = new URL(document.location).searchParams;
        const pid = params.get("pid");

        if (pid) {
          navigate(`/product/edit/?pid=${pid}`);
        }

        return;
      }
      if (window.location.pathname == "/register") {
        navigate("/register");
        return;
      }
      if (window.location.pathname == "/register/:next") {
        navigate("/register/:next");
        return;
      }
      // if (
      //   window.location.pathname != "/login" ||
      //   window.location.pathname != "/"
      // ) {
      //   navigate("/");
      //   return;
      // }
    }
  }, [window.location.pathname]);

  useEffect(() => {
    if (!user?.token) {
      if (window.location.pathname != "/product/checkout/") {
        logout();
      }
    }

    axios.defaults.headers.common["Authorization"] = user?.token;
  }, [user?.token]);

  const logout = async () => {
    await dispatch(setUser());
    navigate("/");
  };

  const getToken = async () => {
    axios.defaults.headers.common["Authorization"] = user?.token;
  };

  return (
    <>
    {!userLogin ?
    <Routes>
      {/* <Route exact={true} path="/" element={<Login />} /> */}
      {/* <Route exact={true} path="/login" element={<Login />} /> */}
      <Route exact={true} path="/register" element={<Register />} />
      
      <Route exact={true} path="/" element={<LoginNew setUserLogin={setUserLogin} />} />
      <Route exact={true} path="/login" element={<LoginNew setUserLogin={setUserLogin} />} />
      <Route exact={true} path="/register/:next" element={<RegisterNew setUserLogin={setUserLogin} />} />

      <Route
        exact={true}
        path="/add-product"
        element={<AddProducts logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/products"
        element={<Products logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/product/checkout/"
        element={<ProductCheckout logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/product/edit/"
        element={<EditProduct logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/subscription"
        element={<Subscription logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/transaction/"
        element={<Transaction logout={logout} getToken={getToken} />}
      />
      <Route
        exact={true}
        path="/transaction/all"
        element={<AllTransaction logout={logout} getToken={getToken} />}
      />

      <Route path="*" element={<Login />} />
    </Routes>
    :
    <>
          {/* Page Wrapper */}
          <div id="wrapper">
                <Sidebar />
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                      {/* <Navbar /> */}
                      <AppRouter setUserLogin={setUserLogin} />

                      {/* Admin panel */}
                      <Routes>
                        <Route exact={true} path="/admin/overview" element={<DashboardAdmin  />} />
                        <Route exact={true} path="/admin/merchant" element={<Merchant  />} />
                        <Route exact={true} path="/admin/analytics" element={<Analytics  />} />
                      </Routes>
                  </div>
              </div>
            </div>
            {/* End of Page Wrapper */}

          
    </>
    }


    </>
  );
};

export default Router1;
