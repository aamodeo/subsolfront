import React, { useState } from 'react'

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import { useNavigate } from 'react-router-dom';

export const Step2 = () => {
    const navigate = useNavigate()
   

    const handleStep2 =(e) => {
        navigate("/register/step3")
    }
 
  return (
    <>
        <div className="col1">
            <div className="formMain">
                    
                    <h1>Samuel, let’s create your first subscription button </h1>
                    <p className='desc'>Now that you have an account, you’ll need to get onboarded. Just a few more steps to make the best use of the platform.</p>
                    <form onSubmit={(e)=>handleStep2(e)}>
                        <div className="inputTitle">What is your name?</div>
                        <div className="floating-label-group mb-3 mt-1">
                            <input type="text" id="username" className="form-control" autocomplete="off" autofocus required />
                            <label className="floating-label">Firstname</label>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input type="text" className="form-control" autocomplete="off" autofocus required />
                            <label className="floating-label">Lastname</label>
                        </div>
                  
                        <button type='submit' className="contBtn btn-block" >Continue</button>
                        <div className="already text-center">Already have an account? <a href="#">Login</a></div>
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

    </>
  )
}
