import React, {useEffect, useState  } from 'react';
import { BrowserRouter, Routes, Route, useNavigate,Navigate ,useLocation } from "react-router-dom";
import { Customers } from '../customer/customer';

import  {Dashboard}  from '../dashboard/dashboard';
import { Notifications } from '../notifications/notifications';
import { Products } from '../products/products';
import { Subscription } from '../subscription/subscription';
import { Transactions } from '../transactions/transactions';

function AppRouter(){
    const location = useLocation();
    const navigation = useNavigate();
    useEffect(()=>{
        if(location.pathname == "/"){
            navigation("/dashboard")
        }
    },[])

    return(
        <Routes>
            {/* <Route exact path='/'  >
                <Navigate to="/dashboard" />
            </Route> */}
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/transactions' element={<Transactions />} />
            <Route exact path='/subscriptions' element={<Subscription />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/notifications' element={<Notifications />} />
            <Route exact path='/customers' element={<Customers />} />
            {/* <Route exact={true} path="/" element={<LoginNew />} /> */}
            

        </Routes>
    )
}

export default AppRouter