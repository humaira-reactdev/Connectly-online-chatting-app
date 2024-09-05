import React, { useEffect, useState } from 'react'
import { IoPersonAdd } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";

const PeopleComponent = () => {
  // ================variables===========//
  const [allusers, setAllusers]=useState([])
    
  // ===========firebase variables============//
  const db = getDatabase();
  // =============get data from realtime database=========//
  useEffect(()=>{
    const starCountRef = ref(db, 'AllUsers/');
    onValue(starCountRef, (snapshot) => {
      let arr=[]
      snapshot.forEach((item)=>{
        arr.push(item.val())
      })
      setAllusers(arr)    
});

  },[])

  
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
      <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">Connect with others</h1>
      <h2 className='text-xl font-regular text-center mb-8'>Add new friends and start a conversation</h2>
      {
        allusers.map((item)=>(
          <div className="max-w-3xl mx-auto">        
          <div
            key=''
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={item.userPhoto}
                alt=''
              />
              <span className="ml-4 text-lg font-semibold text-[#363636]">{item.userName}             
              </span>
            </div>
            <button className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
            <IoPersonAdd className='text-[15px]'/>Add
            </button>
          </div>
        
      </div>

        ))
        
      }
      
    </div>
      
    </>
  )
}

export default PeopleComponent