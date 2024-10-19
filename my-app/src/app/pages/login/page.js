"use client"
import React, { useState,useEffect } from 'react'
import '../../style/login/login.css'
import Link from 'next/link';

const Login = () => {
  const [showEmailorMobile,setShowEmailorMobile]=useState(false);
  const [otpPage,setOtpPage]=useState(false);
  const [otp, setOtp] = useState('');
  const [activeLoginButton,setLoginButton]=useState(false)

  const [mobile,setMobile]=useState('');
  const [email,setEmail]=useState('');
  const [dataError,setDataError]=useState({email:'',mobile:'',otp:''})
  const setMobileUpdate=(e)=>{
    e.preventDefault();
    const phoneNo=e.target.value;
    phoneNo.trim();
    if(phoneNo){
      
      setMobile(e.target.value);
      setLoginButton(true)
    }
    else {
      setLoginButton(false)
      setMobile('');
    }
    setDataError((prevState) => ({
      ...prevState,
      mobile: '',
    }));
  }
  const isValidEmail = (mail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
    
  };
  
  const setEmailUpdate=(e)=>{
    e.preventDefault();
    const emailData=e.target.value;
    emailData.trim();
    if(emailData){
      setEmail(e.target.value);
      setLoginButton(true)
    }
    else {
      setEmail('');
      setLoginButton(false)
    }
    setDataError((prevState) => ({
      ...prevState,
     email:'',
    }));
   
  }

  const submitData=(e)=>{
    e.preventDefault();
    if(showEmailorMobile){
      if(mobile.length!=10){
        setDataError((prevState) => ({
          ...prevState,
          mobile: 'Please enter a valid mobile number',
        }));
      }
      else{
        setOtpPage(true)
      }
    }
    else {
      if(!isValidEmail(email)){
        setDataError((prevState) => ({
          ...prevState,
          email: 'Please enter a valid email address',
        }));
      }
      else {
        setOtpPage(true)
      }
    }
  }

  const handleOtp = () => {
    //otp matching code
  };

  const [timeLeft, setTimeLeft] = useState(50);

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when time reaches 0

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on unmount
  }, [otpPage,timeLeft]);
  return (
    <div className="login">
        <div className="row vh-100">
            <div className="col-lg-5 login-left">
                <h2 className="login-left-heading">The future of education is here</h2>
                <p className="login-left-subheading mt-3">With an all in one platform for the teaching world</p>
                <img src="/image/loginCover.svg" className="img-fluid mt-3"/>
            </div>
            {!otpPage?
            <div className="col-lg-7 login-right">
            <img src="/image/loginLogo.png" height={200} width={200} className="img-fluid mb-4 login-right-logo"/>
            <p className="login-right-heading">Welcome to Campusmonk by Rachit Rastogi!</p>
            {
              showEmailorMobile?
              <div className='mobile-section'>
              <h6  className="login-right-input-label mt-4 mb-2">Your Mobile Number</h6>
              <div className='position-relative'>
              <div className="mobile-code">+91</div>
              <div className="seperator"></div>
              <input type="number" name="mobile" value={mobile} onChange={(e)=>{setMobileUpdate(e)}} className="login-right-input border rounded" placeholder="Enter your mobile number" />
              {dataError.mobile && <p className='text-danger pt-2'><i className="bi bi-exclamation-circle-fill"></i> {dataError.mobile}</p>}
              <div onClick={()=>setShowEmailorMobile(!showEmailorMobile)} className=" login-right-email-link  mt-3 pb-3 d-flex align-items-center"><i className="bi bi-envelope-open " style={{fontSize:"20px"}}></i> <div >Use your email instead</div></div>
              </div>
              </div> :
               <div className='email-section '>
               <h6  className="login-right-input-label mt-4 mb-2">Your Email Address</h6>
               <input type="email" name="email" value={email} onChange={(e)=>{setEmailUpdate(e)}} className="login-right-input-email border rounded" placeholder="eg. amareshranjan@gmail.com" />
               {dataError.email && <p className='text-danger pt-2'><i className="bi  bi-exclamation-circle-fill"></i> {dataError.email}</p>}
               <div onClick={()=>setShowEmailorMobile(!showEmailorMobile)} className=" login-right-email-link  mt-3 pb-3 d-flex align-items-center"><i className="bi bi-phone " style={{fontSize:"20px"}}></i> <div >Use your mobile number instead</div></div>
               </div>
            }

            {!activeLoginButton? <div  className="secure-tag1 mt-5 rounded ">Proceed Securely</div>: <div onClick={(e)=>submitData(e)}  className="secure-tag2 mt-5 rounded ">Proceed Securely</div>}
           
            <p className="login-right-TC mt-3">By continuing, you agree to the <Link href='https://classplusapp.com/termsOfUse'> <span className="login-right-TC-link" > terms and conditions</span></Link></p>
            
            </div> :
             <div className="col-lg-7 login-right">
              <div onClick={(e)=>{setOtpPage(false)}} className='d-flex align-items-center back gap-1'><i class="bi bi-chevron-compact-left"></i><div>Back</div></div>
              <h4 className='otp-heading mt-3'>Verify OTP</h4>
              <div className='d-flex gap-2'><p className='otp-subheading w-100'>Please enter the 4-digit verification code sent to you at</p><p className='w-100 otp-subheading-emailmobile'><b>{showEmailorMobile?`+91-${mobile}`:email}</b></p></div>
             
              <h6  className="login-right-input-label mt-4 mb-4">Enter OTP here</h6>
              <input type='text' name='otp' value={otp}
          onChange={(e)=> setOtp(e.target.value)} className="login-right-input-email border py-3 mb-2 rounded" />
           {dataError.otp && <p className='text-danger pt-2'><i className="bi bi-exclamation-circle-fill"></i> {dataError.otp}</p>}
              {timeLeft===0 ? <h6  className="login-right-input-desc mt-4 mb-5 pb-5" onClick={()=>setTimeLeft(50)}>Send OTP again</h6>:
              <p style={{color:'#666666'}}className='mt-4 mb-5 pb-5'>Resend otp in {timeLeft} seconds</p>}
             {otp.length!=4? <div  className="secure-tag1 mt-5 rounded ">Verify OTP</div>:<div onClick={()=>handleOtp}  className="secure-tag2 mt-5 rounded ">Verify OTP</div>}
              </div>
            }
        </div>

    </div>
  )
}

export default Login;
