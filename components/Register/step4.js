import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import x from "../../assets/images/x.svg"
import arrow from "../../assets/images/arrow.svg"
import etherum from "../../assets/images/etherum.png"
import teather from "../../assets/images/teather.png"

export const Step4 = () => {
    const navigate = useNavigate()

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStep1 =(e) => {
        e.preventDefault()
        navigate("/register/step5")

    }
 
  return (
    <>
        <div className="col1">
            <div className="formMain">
                {show &&
                    <div className="alert">Please note that we currently support only ERC-20 tokens 
                        <span onClick={handleClose}><img src={x} alt="close" /></span>
                    </div>
                }
                    <h1>Now, let’s customize your button   </h1>
                    <p className='desc'>Create your first payout button.</p>
                    <form onSubmit={(e)=>handleStep1(e)}>
                        <div className="floating-label-group mb-2 mt-1">
                            <div className="dropdown form-control input">
                                <button className="btn  dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className='me-1 w-20' src={etherum} alt="etherum" /> Ethereum
                                <img className='arrow' src={arrow} alt="down" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <label className="floating-label" style={{top:"5px",fontSize:"12px"}}>Choose Currency</label>
                        </div>
                        <div className="floating-label-group mb-3 mt-2">
                            <input type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Enter amount to charge in US dollar</label>
                        </div>
                        <div className="cutomizePlan">
                            <h4>Customize your plan</h4>
                            <p>How regularly do you want to withdraw funds from your users' wallets?</p>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input placeholder='1 days' type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Stop Reoccurrence</label>
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
                <div className="walletAdCard pButtonMain">
                        <h2>Button Preview</h2>
                        <p className='mb-0'>Your website or mobile app will display your button like this. On the next step you will be able to style your button based on your preferences.</p>
                        <button className='designBtn bgGreen'><img className='me-2' src={teather} alt="" /> $2 </button>
                        <p className='detail'>If you finish your button, you can accept payments. A business that adds a button to their website sees a lift in sales of up to 30% on average.</p>
                </div>
                <div className='pt-5'></div>

                   
            </div>
        </div>

    </>
  )
}
