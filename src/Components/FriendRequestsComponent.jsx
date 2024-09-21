import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { MdNotInterested } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useSelector } from 'react-redux';



const FriendRequestsComponent = () => {

  // ==================get data from redux==================//
const sliceUserData = useSelector((state) => state.counter.userData)

  // ===================states==============//
  const [friendRequest, setFriendrequest]=useState([])

  // ================firebase variables========//
  const db = getDatabase();

  // ===========functions================// 
  useEffect(()=>{
    const starCountRef = ref(db, 'friendrequests/');
        onValue(starCountRef, (snapshot) => {
          let arr= []
          snapshot.forEach((item)=>{
            if(item.val().receiverId==sliceUserData.uid){
              arr.push({...item.val(), key:item.key})
            }              
          })
          setFriendrequest(arr)
      });    

  },[])

  // =============CONFIRM FRIEND REQUEST===========//
  const handleConfirm=(data)=>{

    // // ==============add data to friends============//
    set(push(ref(db, 'friends/')),{
      currentUserID: sliceUserData.uid,
      currentUsername: sliceUserData.displayName,
      currentUserphoto: sliceUserData.photoURL,
      friendID: data.senderID,
      friendName: data.senderName,
      friendPhoto: data.senderPhoto
    })

    // // =======remove data from friendrequests====//
    remove(ref(db, 'friendrequests/'+data.key))

  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
        <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">Friend Requests</h1>
        <h2 className='text-xl font-regular text-center mb-8'>These people want to connect with you</h2>
        {
          friendRequest.map((item)=>(
            <div className="max-w-3xl mx-auto">        
          <div
            key={item.key}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={item.senderPhoto}
                alt=''
              />
              <span className="ml-4 text-lg font-semibold text-[#363636]">{item.senderName}          
              </span>
            </div>
            <div className='flex gap-[10px]'>
              <button onClick={()=>handleConfirm(item)} className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <FaCircleCheck className='text-[15px]'/>Accept
              </button>
              <button className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <FaTimesCircle className='text-[15px]'/>Decline
              </button>
              <button className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <MdNotInterested className='text-[15px]'/>Block
              </button>
            </div>            
          </div>        
      </div>    
          ))
        }
          
      </div>
      
    </>
  )
}

export default FriendRequestsComponent