import React, { useState } from 'react'

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import { Link, useNavigate } from 'react-router-dom';

export const LoginNew = ({setUserLogin}) => {
    const navigate = useNavigate()

    const handleLogin =(e) => {
        e.preventDefault();
        navigate("/dashboard")
        setUserLogin(true)
    }
 
  return (
    <>
    <div className="registerPage">

        <div className="col1">
            <div className="formMain">
                    
                    <h1>Login</h1>
                    <p className='desc'>If yo do not have an account please register.</p>
                    <form onSubmit={(e)=>handleLogin(e)}>
                        <div className="floating-label-group mb-3">
                            <input type="email" className="form-control" autofocus required />
                            <label className="floating-label">Email</label>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input type="text" className="form-control" autocomplete="off" autofocus required />
                            <label className="floating-label">Password</label>
                        </div>
                  
                        <button type='submit' className="contBtn btn-block" >Login</button>
                        <div className="already text-center">Do not have an account? <Link to="/register/step1">register</Link></div>
                    </form>
            </div>
        </div>
        <div className="col2">
                <div className="subscriptionMain">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="cryptoLogo">
                        <img src={cryptoLogos} alt="" />
                    </div>
                    <div className="content">
                        <h1>It has never been easier to create recurrent subscriptions</h1>
                        <p>Create your product today and start earning in different crytocurriencies</p>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}
