import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";
import { IoPersonRemove } from "react-icons/io5";

const FriendsComponent = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
        <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">Friends</h1>
        <h2 className='text-xl font-regular text-center mb-8'>All the people whom you've added, or who have added you</h2>
          <div className="max-w-3xl mx-auto">        
          <div
            key=''
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src=''
                alt=''
              />
              <span className="ml-4 text-lg font-semibold text-[#363636]">Username             
              </span>
            </div>
            <div className='flex gap-[10px]'>
              <button className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <IoPersonRemove className='text-[15px]'/>Unfriend
              </button>
              <button className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <MdNotInterested className='text-[15px]'/>Block
              </button>

            </div>
            
          </div>
        
      </div>        
      
      </div>
      
      

    </>
  )
}

export default FriendsComponent