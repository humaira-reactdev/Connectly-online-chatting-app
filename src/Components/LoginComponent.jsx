import React, { useState } from 'react'
import Lottie from 'lottie-react';
import loginAnimation from '../../public/images/loginAnimation.json'
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const [showPass, setShowPass]=useState(false)
  
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }

  // ==========state part start
  const [email, setEmail]=useState('')
  const [pass, setPass]=useState('')
  const [emailError, setEmailError]=useState('')
  const [passError, setPassError]=useState('')

  // =========state part end

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
}
//  =============submit part end


  return (
    <>
        
        <div className='login flex justify-center gap-[300px] mt-[150px]'>
            <div className='loginAnimation '>
            <Lottie animationData={loginAnimation} loop={true} className='w-[450px]'/>
            </div>
            <div className='loginForm'>
                <img src="images/logo.png" alt="logo" className='w-[100px] mx-auto'/>
                <p className='mt-[20px] text-center text-[15px] font-montserrat font-medium'>Log in to continue</p>
                <form action="submit" onSubmit={handleSubmit} className='mt-[20px] min-w-full'>
                    <label htmlFor="email" className='font-medium font-montserrat'>Email</label><br />
                    <input type="email" onChange={handleEmail} className='email border-[black] border-[1px] rounded-md w-full mb-2 p-1 outline-none font-montserrat' /><br />
                    <p className='emailError text-[10px] text-red-700 font-montserrat'>{emailError}</p>
                    <label htmlFor="password" className='font-medium font-montserrat'>Password</label><br />
                    <input type="password" onChange={handlePassword} className='password border-[black] border-[1px] rounded-md w-full p-1 outline-none' />
                    <p className='passError text-[10px] text-red-700 font-montserrat'>{passError}</p>
                    <button className='w-full text-center text-[15px] font-medium bg-[#8E3E63] hover:bg-[#FFB07F] ease-linear duration-200 hover:text-black my-7 py-[5px] p-[3px] rounded-md font-montserrat text-white'>Log In</button>
                </form>
                <p className='text-center'>New here? <Link to='#' className='text-blue-700'>Sign up</Link></p>


            </div>

        </div>
    </>
  )
}

export default LoginComponent