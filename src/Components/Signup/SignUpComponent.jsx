import React, { useState } from 'react'
import './signupcss.css'
import Lottie from 'lottie-react';
import loginAnimation from '../../../public/images/signupAnimation.json'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUpComponent = () => {
  const [showPass, setShowPass]=useState(false)
  
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }

  // ==========state part start
  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [pass, setPass]=useState('')
  const [usernameError, setUsernameError]=useState('')
  const [emailError, setEmailError]=useState('')
  const [passError, setPassError]=useState('')

  // =========state part end

  // ===========function part start 
  const handleUserName=(e)=>{
    setUsername(e.target.value)
    setUsernameError('')
  }
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

    if(!username){
      setUsernameError('Please provide a username')
    }

    if(!email){
      setEmailError('Please enter a valid email address')
    }
    if(!pass){
      setPassError('Please enter your password')
    }
}
//  =============submit part end
  return (
    <>
      <div className='login flex justify-center items-center gap-[250px] mt-[100px]'>
            <div className='loginAnimation '>
            <Lottie animationData={loginAnimation} loop={true} className='w-[450px]'/>
            </div>
            <div className='loginForm w-[250px]'>
                <img src="images/logo.png" alt="logo" className='w-[100px] mx-auto'/>
                <p className='mt-[20px] text-center text-[15px] font-montserrat font-light text-black'>Sign up to continue</p>
                <form action="submit" onSubmit={handleSubmit} className='mt-[20px] min-w-full'>
                    <label htmlFor="email" className='font-medium font-montserrat text-black'>Username</label><br />
                    <input type="text" onChange={handleUserName} className='email rounded-md w-full p-2 outline outline-1 focus:outline-none focus:ring-2 focus:ring-[#FFB07F] font-montserrat font-light text-black text-sm' placeholder='Enter your username'/><br />
                    <p className='usernameError text-[10px] text-red-600 font-montserrat mb-2'>{usernameError}</p>
                    <label htmlFor="email" className='font-medium font-montserrat text-black'>Email</label><br />
                    <input type="email" onChange={handleEmail} className='email rounded-md w-full p-2 outline outline-1 focus:outline-none focus:ring-2 focus:ring-[#FFB07F] font-montserrat font-light text-black text-sm' placeholder='Enter your email'/><br />
                    <p className='emailError text-[10px] text-red-600 font-montserrat mb-2'>{emailError}</p>
                    <label htmlFor="password" className='font-medium font-montserrat text-black'>Password</label><br />
                    <div className='relative'>
              <input
                type={showPass ? 'text' : 'password'}
                onChange={handlePassword}
                className='password rounded-md w-full p-2 outline outline-1 bg-white text-black font-montserrat font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB07F]' placeholder='Enter your password'/>
              <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handleShowPass}>
                {showPass ? <FaEye className='text-black'/> : <FaEyeSlash className='text-black'/>}
              </span>
            </div>                    
                    <p className='passError text-[10px] text-red-600 font-montserrat mb-2'>{passError}</p>
                    
                    {/* ===============CONFIRM PASSWORD START============= */}
                    <label htmlFor="password" className='font-medium font-montserrat text-black'>Confirm Password</label><br />
                    <div className='relative'>
              <input
                type={showPass ? 'text' : 'password'}
                onChange={handlePassword}
                className='password rounded-md w-full p-2 outline outline-1 bg-white text-black font-montserrat font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB07F]' placeholder='Enter your password'
              />
              <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handleShowPass}>
                {showPass ? <FaEye className='text-black'/> : <FaEyeSlash className='text-black'/>}
              </span>
            </div>                    
                    <p className='passError text-[10px] text-red-600 font-montserrat'>{passError}</p>
                    

                    {/* ===============CONFIRM PASSWORD END============= */}
                    
                    <button className='w-full text-center text-white text-[15px] font-medium bg-[#8E3E63] hover:bg-[#FFB07F] hover:text-black ease-linear duration-200 my-7 py-[7px] p-[3px] rounded-md font-montserrat'>Sign Up</button>
                
                </form>
                <p className='text-center text-black'>Already have an account? <Link to='/' className='text-blue-400 underline'>Log In</Link></p>
            </div>
        </div>

    </>
  )
}

export default SignUpComponent