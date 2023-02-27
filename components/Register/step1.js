import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../../assets/images/logo.png"
import logoCircle from "../../assets/images/logoCircle.png"
import cryptoLogos from "../../assets/images/cryptoLogos.png"
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';

export const Step1 = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [otp, setotp] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStep1 =(e) => {
        e.preventDefault()
        handleShow()
    }
    const handleChangeOtp  =(otp) => {
        setotp(otp)
    }
    const handleOtp =(e) => {
        console.log(otp.length);
        if(otp.length < 4){
            alert("Please fill OTP code")
        }else {
            navigate("/register/step2")
        }
    }
  return (
    <>
        <div className="col1">
            <div className="formMain">
                    <h1>Create an Account <br /> with Subscription Pay!</h1>
                    <p className='desc'>Start receiving recurring subscription payments in crypto, Create a merchant account today! </p>
                    <form onSubmit={(e)=>handleStep1(e)}>
                        <div className="floating-label-group mb-3">
                            <input type="text" id="username" className="form-control" autofocus required />
                            <label className="floating-label">Username</label>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input type="email" className="form-control" autofocus required />
                            <label className="floating-label">Email Address</label>
                        </div>
                        <div className="floating-label-group mb-3">
                            <input type="password" className="form-control" autofocus required />
                            <label className="floating-label">Password</label>
                        </div>
                        <div className="privacy">
                            <input type="checkbox" required name="policy" id="" />
                            <p>I have read and agree to Subscription Pay’s <a href='#'> Terms of Service</a> and <a href='#'>Privacy Policy.</a></p>
                        </div>
                        <button type='submit' className="contBtn btn-block" >Continue</button>
                        <div className="already">Already have an account? <Link to="/login">Login</Link></div>
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

        <Modal show={show} onHide={handleClose} centered>
      
        <Modal.Body>
            <div className="otpModalMain">
                <div className="logo">
                    <img className='img-fluid' src={logoCircle} alt="" />
                </div>
                <h2 className="title">Check your email, please.</h2>
                <div className="desc">We emailed the address <a href="mailto:" >hello@example.com</a>. Kindly fill in the boxes with the code contained in your mail</div>
                <div className="otpInputMain">

                    <OtpInput
                    value={otp}
                    onChange={handleChangeOtp}
                    numInputs={4}
                    isInputNum={true}
                    placeholder="----"
                    separator={<span>-</span>}
                    />
                </div>

                <div className="resend">Did not receive a code? <span>Resend code</span></div>
                <button type='submit' className="contBtn btn-block" onClick={handleOtp} >Continue</button>
            </div>
        </Modal.Body>
      
      </Modal>
    </>
  )
}
