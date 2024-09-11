import React from 'react'
import { TbMessageCircleFilled } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";
import { HiUserAdd } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const currentUserData = useSelector((state) => state.counter.userData)

  return (
    <>
    <div className="min-h-screen bg-[#8E3E63] text-white flex flex-col justify-between w-64 font-montserrat">
      {/* Navbar Options */}
      <div className="mt-10">
        <img src="images/logoWhite.png" alt="" className='h-[80px] w-[100px] mx-auto mb-[50px]'/>
        <NavLink to='/people' className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <BsPeopleFill className="mr-3 text-xl" />
          <span className="text-lg">People</span>
        </NavLink>
        
        <NavLink to='/requests' className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <HiUserAdd className="mr-3 text-xl" />
          <span className="text-lg">Friend Requests</span>
        </NavLink>
        <NavLink to='/friends' className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <FaPeopleGroup className="mr-3 text-xl" />
          <span className="text-lg">Friends</span>
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <TbMessageCircleFilled className="mr-3 text-xl" />
          <span className="text-lg">Messages</span>
        </NavLink>
        <NavLink to='/' className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <RiAccountCircleFill className="mr-3 text-xl" />
          <span className="text-lg">Profile</span>
        </NavLink>
        <NavLink to='/blocked' className={({ isActive }) => isActive?"flex items-center px-6 py-3 cursor-pointer bg-[#5c263f] ":"flex items-center px-6 py-3 cursor-pointer hover:bg-[#b45f86]"}>
          <ImBlocked className="mr-3 text-xl" />
          <span className="text-lg">Blocked</span>
        </NavLink>
      </div>

      {/* Profile Section */}
      <div className="flex items-center px-6 py-3 bg-[#8E3E63]">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={currentUserData?.photoURL}
          alt="Profile"
        />
        <div className="ml-3">
          <h2 className="text-lg  font-semibold">{currentUserData?.displayName}</h2>
        </div>
      </div>
    </div>    
    </>
  )
}

export default Navbar