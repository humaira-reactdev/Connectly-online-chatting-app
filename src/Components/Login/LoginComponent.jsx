import React, { useState,useEffect } from 'react'
import Lottie from 'lottie-react';
import loginAnimation from '../../../public/images/loginAnimation.json'
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from 'react-redux';
import { userData } from '../../Slice/userSlice';
import BeatLoader from "react-spinners/BeatLoader";

const LoginComponent = () => {
    const [showPass, setShowPass]=useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

  
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }

  // ==========state part start
  const [email, setEmail]=useState('')
  const [pass, setPass]=useState('')
  const [emailError, setEmailError]=useState('')
  const [passError, setPassError]=useState('')

  // =========state part end

  // =======firebase variables
  const db = getDatabase();
  const auth = getAuth();

  // ===========function part start 
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword=(e)=>{
    setPass(e.target.value)
    setPassError('')
  }
 // ==============function part end

//  =============submit part start

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!email){
      setEmailError('Please enter a valid email address')
    }
    if(!pass){
      setPassError('Please enter your password')
    }
    else{
      // Sign in
      setLoading(true)
      signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user=userCredential.user;
        if(userCredential.user.emailVerified==false){
          toast.error('Email unverified. Please verify your email to log in.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            setLoading(false)
        }
        // else if(){

        // }
        else{
          toast.success('Logged in!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            setLoading(false)
            // ================SET DATA TO REDUX===================//
            dispatch(userData(user))
            // ===================SET DATA TO LOCALHOST===============//
              localStorage.setItem('userData', JSON.stringify(user))
            // =====================NAVIGATE TO HOMEPAGE==================//
            navigate('/')     
            //==========send data to realtime database======//  
            set(ref(db, 'AllUsers/'+user.uid), {
              userName: user.displayName,
              userPhoto: user.photoURL,
              userID: user.uid,
            });     
          }            
                  
      })
      .catch((error) => {        
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode=='auth/invalid-credential'){
          setLoading(false)
          toast.error('Incorrect Email or Password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            console.log(errorMessage)

        }
      });
    
      
    }
}
//  =============submit part end
useEffect(() => {
  document.body.style.backgroundColor = '#8E3E63'; // Background color for Login page

  return () => {
    document.body.style.backgroundColor = ''; // Reset on component unmount
  };
}, []);


  return (
    <>
        
        <div className='login flex justify-center gap-[250px] mt-[150px] font-montserrat'>
            <div className='loginAnimation '>
            <Lottie animationData={loginAnimation} loop={true} className='w-[450px]'/>
            </div>
            <div className='loginForm w-[250px]'>
                <img src="images/logoWhite.png" alt="logo" className='w-[100px] mx-auto'/>
                <p className='mt-[20px] text-center text-[15px] font-montserrat font-light'>Log in to continue</p>
                <form action="submit" onSubmit={handleSubmit} className='mt-[20px] min-w-full'>
                    <label htmlFor="email" className='font-medium font-montserrat'>Email</label><br />
                    <input type="email" onChange={handleEmail} className='email rounded-md w-full p-2 outline-none focus:outline-none focus:ring-2 focus:ring-[#FFB07F] font-montserrat font-light text-black text-sm' placeholder='Enter your email'/><br />
                    <p className='emailError text-[10px] text-red-200 font-montserrat mb-2'>{emailError}</p>
                    <label htmlFor="password" className='font-medium font-montserrat'>Password</label><br />
                    <div className='relative'>
                      <input
                        type={showPass ? 'text' : 'password'}
                        onChange={handlePassword}
                        className='password rounded-md w-full p-2 outline-none bg-white text-black font-montserrat font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB07F]' placeholder='Enter your password'
                      />
                      <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handleShowPass}>
                        {showPass ? <FaEye className='text-black'/> : <FaEyeSlash className='text-black'/>}
                      </span>
                    </div>                    
                    <p className='passError text-[10px] text-red-200 font-montserrat'>{passError}</p>
                    <Link to='/forgotpassword' className='text-[12px]'>Forgot Password?</Link>
                    {/* ============BUTTON START============== */}
                    {
                      loading?
                      <div className='w-full text-center text-[15px] font-medium bg-[#91DDCF] my-7 py-[7px] p-[3px] rounded-md font-montserrat'>
                      <BeatLoader color='#fff' size='10px'/>
                    </div>
                    :
                    <button className='w-full text-center text-black text-[15px] font-medium bg-[#91DDCF] hover:bg-[#FFB07F] ease-linear duration-200 my-7 py-[7px] p-[3px] rounded-md font-montserrat'>Log In</button>
                    }
                    
                    
                    {/* =================BUTTON END================ */}
                </form>
                <p className='text-center'>New here? <Link to='/signup' className='text-blue-400 underline'>Sign up</Link></p>
            </div>
        </div>
    </>
  )
}

export default LoginComponent