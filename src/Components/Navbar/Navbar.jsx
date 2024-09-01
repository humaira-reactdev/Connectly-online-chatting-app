import React from 'react'
import { TbMessageCircleFilled } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <div className="h-screen bg-[#8E3E63] text-white flex flex-col justify-between w-64">
      {/* Navbar Options */}
      <div className="mt-10">
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]">
          <BsPeopleFill className="mr-3 text-xl" />
          <span className="text-lg">People</span>
        </div>
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]">
          <TbMessageCircleFilled className="mr-3 text-xl" />
          <span className="text-lg">Messages</span>
        </div>
        <div className="flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]">
          <RiAccountCircleFill className="mr-3 text-xl" />
          <span className="text-lg">Profile</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center px-6 py-3 bg-[#8E3E63]">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="ml-3">
          <h2 className="text-lg  font-semibold">John Doe</h2>
        </div>
      </div>
    </div>


    
    </>
  )
}

export default Navbar