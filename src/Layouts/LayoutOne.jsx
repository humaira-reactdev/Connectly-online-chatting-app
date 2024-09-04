import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const LayoutOne = () => {
  // const sliceUser = useSelector((state)=>state.counter.userData)
  // const navigate=useNavigate()
  // console.log(sliceUser)

  // useEffect(()=>{
  //   if(sliceUser==null){
  //     navigate('/login')
  //   }
  //   // else{
  //   //   navigate('/')
  //   // }
  // },[])
  

  return (
    <>
      <div className="flex min-h-screen">
        <Navbar/>
        <div className="flex-grow">
          <Outlet/>
        </div>          
      </div>
    </>
  )
}

export default LayoutOne