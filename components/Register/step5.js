import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputColor from 'react-input-color';

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import x from "../../assets/images/x.svg"
import arrow from "../../assets/images/arrow.svg"
import etherum from "../../assets/images/etherum.png"
import teather from "../../assets/images/teather.png"

export const Step5 = () => {
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false);
    const [btnText, setBtnText] = useState("");
    const [color, setColor] = useState({hex:"#04A55E"});
    const [textColor, setTextColor] = useState({});

    const handleStep5 =(e) => {
        e.preventDefault()
        navigate("/register/step6")

    }
 
  return (
    <>
        <div className="col1">
            <div className="formMain">
              
                    <h1>Now, let’s customize your button </h1>
                    <p className='desc'>Create your first payout button.</p>
                    <form onSubmit={(e)=>handleStep5(e)}>
                        
                        <div className="floating-label-group mb-3 mt-0">
                            <input placeholder='BUY DESIGN UI' value={btnText} onChange={(e)=>setBtnText(e.target.value)} type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Button Text</label>
                        </div>
                        <div className="toggleRow">
                            <p>Show Button Text</p>
                            <div className={toggle ?"toggleBtn bgToggle":"toggleBtn"} onClick={()=>setToggle(!toggle)} >
                                <div className={toggle ?"ml-18 circle":"circle"} ></div>
                            </div>
                        </div>
                        <div className="floating-label-group mb-3 ">
                            <input value={color.hex} type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Button Color</label>
                            <div className="colorPicker">
                                <InputColor
                                    initialValue="#04A55E"
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className="floating-label-group mb-3 ">
                            <input value={textColor.hex} type="text" className="form-control"  autofocus required />
                            <label className="floating-label">Button Text Color</label>
                            <div className="colorPicker">
                                <InputColor
                                    initialValue="#fff"
                                    onChange={setTextColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className='d-flex ai-center'>
                            <button className="btn backBtn px-3 me-2" onClick={()=>navigate("/register/step4")}><img src={arrow} className="me-2 " alt="" /> Back</button>
                            <button type='submit' className="contBtn btn-block" >Publish Product button</button>
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
                        <button className='designBtn' style={{background:color.hex,color:textColor.hex}}>
                            <img className='me-2' src={teather} alt="" />
                             $2 {toggle && btnText} 
                        </button>
                        <p className='detail'>If you finish your button, you can accept payments. A business that adds a button to their website sees a lift in sales of up to 30% on average.</p>
                </div>
                <div className='pt-5'></div>

                   
            </div>
        </div>

    </>
  )
}
