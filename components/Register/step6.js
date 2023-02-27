import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputColor from 'react-input-color';

import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import x from "../../assets/images/x.svg"
import arrow from "../../assets/images/arrow.svg"
import copy from "../../assets/images/copy.png"
import teather from "../../assets/images/teather.png"

export const Step6 = ({setUserLogin}) => {
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false);
    const [btnText, setBtnText] = useState("");
    const [color, setColor] = useState({hex:"#04A55E"});
    const [textColor, setTextColor] = useState({});

    const handleStep5 =(e) => {
        e.preventDefault()
        alert("Registration Success")
        setUserLogin(true)
        navigate("/dashboard")

    }
 
  return (
    <>
        <div className="col1">
            <div className="formMain">
              
                    <h1>Yay! You’re all set</h1>
                    <p className='desc'>Copy the code and embed it to any website you want.</p>
                    <form onSubmit={(e)=>handleStep5(e)}>
                        <div className="codeSnipCard">
                            <div className="row1">
                                <div className="codep">Code Preview</div>
                                <div className="seeDoc">See the documentation</div>
                            </div>
                            <div className="codeSnip">
                                {`
                                <div class="subspay-button" 
                                    data-amount-"10" 
                                    data-currency-"SOL" 
                                    data-label="SUBSPAY" 
                                    data-useLabel="true" 
                                    data-receiver  
                                    "7r9pNU3NKvXpEZmoBP9LLkkDh3kTusYz63nnLTx3BIM  
                                    data-buttonColor="#01149e" 
                                    data-buttonTextColor="#f6f0FO"> 
                                </div>
                                `}
                            </div>
                            <div className="btnMain">
                                <button className='me-3' type='text'>
                                    Copy button code <img src={copy} alt="" />
                                </button>
                                <button type='text'>
                                    Create new recurrent button
                                </button>
                            </div>
                        </div>
                        <button type='submit' className="contBtn btn-block">Go to Dashboard</button>
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
