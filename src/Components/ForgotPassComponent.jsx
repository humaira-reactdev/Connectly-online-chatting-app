import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const ForgotPassComponent = () => {

  const [email, setEmail] = useState('');
  const auth = getAuth();
  const navigate=useNavigate()  

  const handleChange=(event)=>{
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!email){
      alert('Enter your email')
    }
    else{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent!')
        navigate('/')        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
        
    
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src="/images/logo.png" alt="logo" className='w-[100px] mb-[10px]'/>
        <h1 className='text-black font-bold font-montserrat text-[20px] mt-[20px]'>Reset Password</h1>
        <p className='text-black font-montserrat font-semibold mb-[20px] text-[13px]'>A password reset link will be sent to your email address.</p>
      <form onSubmit={handleSubmit} className="bg-[#8E3E63] p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-white font-montserrat text-sm font-bold mb-2" htmlFor="input">
            Enter your email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
          />
        </div>
        <div className="mb-4">
          <a href="/" className="text-white hover:text-[#FFB07F] ease-linear duration-300 font-montserrat">
            Back to login
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-[#91DDCF] hover:bg-[#FFB07F] ease-linear duration-300 text-black font-normal font-montserrat py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default ForgotPassComponent