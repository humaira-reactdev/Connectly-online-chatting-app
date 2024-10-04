import React, { useState } from 'react'
import { TbMessageCircleFilled } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";
import { HiUserAdd } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const currentUserData = useSelector((state) => state.counter.userData);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
      localStorage.removeItem('userData')
      location.reload()
  }

  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden p-4 flex justify-between items-center bg-[#8E3E63] text-white">
        <img src="images/logoWhite.png" alt="Logo" className="h-10 w-auto" />
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`md:flex flex-col font-montserrat justify-between w-64 bg-[#8E3E63] text-white fixed md:static min-h-screen transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        {/* Navbar Options */}
        <div className="mt-10">
          <img src="images/logoWhite.png" alt="Logo" className="h-[80px] w-[100px] mx-auto mb-[50px] hidden md:block" />
          <NavLink to='/people' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <BsPeopleFill className="mr-3 text-xl" />
            <span className="text-lg">People</span>
          </NavLink>
          <NavLink to='/requests' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <HiUserAdd className="mr-3 text-xl" />
            <span className="text-lg">Friend Requests</span>
          </NavLink>
          <NavLink to='/notifications' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <IoMdNotifications className="mr-3 text-xl" />
            <span className="text-lg">Notifications</span>
          </NavLink>
          <NavLink to='/friends' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <FaPeopleGroup className="mr-3 text-xl" />
            <span className="text-lg">Friends</span>
          </NavLink>
          <NavLink to="/messages" className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <TbMessageCircleFilled className="mr-3 text-xl" />
            <span className="text-lg">Messages</span>
          </NavLink>
          <NavLink to='/' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <RiAccountCircleFill className="mr-3 text-xl" />
            <span className="text-lg">Profile</span>
          </NavLink>
          <NavLink to='/blocked' className={({ isActive }) => isActive ? "flex items-center px-6 py-3 bg-[#5c263f]" : "flex items-center px-6 py-3 hover:bg-[#b45f86]"}>
            <ImBlocked className="mr-3 text-xl" />
            <span className="text-lg">Blocked</span>
          </NavLink>
        </div>

        {/* Profile Section */}
        <div className="flex items-center px-6 py-3 bg-[#8E3E63]">
          <img className="w-12 h-12 object-cover rounded-full" src={currentUserData?.photoURL} alt="Profile" />
          <div className="ml-3">
            <h2 className="text-sm font-semibold">{currentUserData?.displayName}</h2>
          </div>
          <TbLogout onClick={handleLogout} className='ml-[20px] text-lg cursor-pointer'/>

        </div>
      </div>

      {/* Background overlay when menu is open (for mobile) */}
      {isOpen && (
        <div onClick={toggleMenu} className="fixed inset-0  opacity-50 md:hidden"></div>
      )}
    </>
  );
};

export default Navbar;
