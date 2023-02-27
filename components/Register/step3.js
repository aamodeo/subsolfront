import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import x from "../../assets/images/x.svg"
import arrow from "../../assets/images/arrow.svg"
import batteryCharging from "../../assets/images/batteryCharging.png"

export const Step3 = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStep3 =(e) => {
        e.preventDefault()
        navigate("/register/step4")
    }
 
  return (
    <>
        <div className="col1">
            <div className="formMain">
                {show &&
                    <div className="alert">Due to the fact that we only currently support ERC-20 coins, please ensure that your wallet address is compatible with ERC-20 tokens and coins. 
                        <span onClick={handleClose}><img src={x} alt="close" /></span>
                    </div>
                }
                    <h1>Samuel, let’s create your first subscription button  </h1>
                    <p className='desc'>To access the full capability of the subscription pay platform, we’ll like to create your first payout button.</p>
                    <form onSubmit={(e)=>handleStep3(e)}>
                        <div className="inputTitle">Where would you like to receive your payouts?</div>
                        <div className="floating-label-group mb-2 mt-1">
                            <input type="text" className="form-control" autofocus required />
                            <label className="floating-label">Enter Wallet address</label>
                        </div>
                        <div className="inputTitle">What is the name of your product</div>
                        <div className="floating-label-group mb-3 mt-2">
                            <input type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Product name</label>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Product Website</label>
                        </div>
                        <div className='d-flex ai-center'>
                            <button className="btn backBtn px-3 me-2" onClick={()=>navigate("/register/step2")}><img src={arrow} className="me-2 " alt="" /> Back</button>
                            <button type='submit' className="contBtn btn-block" >Continue</button>
                        </div>
                        <div className="already text-center">Dont have a wallet address? <a href="#">Get Metamask</a></div>
                    </form>
            </div>
        </div>
        <div className="col2">
            <div className="subscriptionMain2">
                <div className="logo">
                        <img src={logo} alt="" />
                </div>
                <div className="walletAdCard">
                        <h2>What is a wallet address?</h2>
                        <p className='mb-4'>A wallet is your passport to Web3. This serves as an account with which you can access and explore decentralised applications.</p>
                        <h3>Perks of Wallet Address </h3>
                        <div className="adText">
                            <img src={batteryCharging} alt="" />
                            <p>You’ll be able to receive funds at lightening  speeds. Meaning you’ll be able to receive in less than 10s.</p>
                        </div>
                        <div className="adText">
                            <img src={batteryCharging} alt="" />
                            <p>Wallets can be used to send, receive and exchange cryptos easily</p>
                        </div>
                        <div className="adText">
                            <img src={batteryCharging} alt="" />
                            <p>Wallets can be used as your on-chain identity. Think of it as a passport</p>
                        </div>
                </div>
                <div className='pt-5'></div>

                   
            </div>
        </div>

    </>
  )
}
