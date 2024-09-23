import React, { useEffect, useState } from 'react'
import { IoPersonAdd } from "react-icons/io5";
import { MdNotInterested } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const PeopleComponent = () => {
  //============get data from redux==============//
  const sliceUserData = useSelector((state) => state.counter.userData)
  // ================state variables===========//
  const [allusers, setAllusers]=useState([])
  const [requestStatus, setRequestStatus]=useState({});
    
  // ===========firebase variables============//
  const db = getDatabase();

  // =============get data from realtime database=========//
  useEffect(()=>{
    if (sliceUserData) {
    const starCountRef = ref(db, 'AllUsers/');
    onValue(starCountRef, (snapshot) => {
      let arr=[]
      snapshot.forEach((item)=>{
        // in firebase, uid is stored as userID, and in redux, its uid. so I'm comparing userID and uid
        if(sliceUserData && String(item.val().userID)!=String(sliceUserData.uid)){
          arr.push({...item.val(), key: item.key})
        }
        
      })
      setAllusers(arr)    
    });
  }

  },[sliceUserData,db])

  // =======================functions start=================//
  const handleAdd = (friendData)=>{
    set(push(ref(db, 'friendrequests/')), {
      senderID: sliceUserData.uid,
      senderName:sliceUserData.displayName,
      senderPhoto: sliceUserData.photoURL,
      receiverId:friendData.userID,
      receiverName: friendData.userName,
      receiverPhoto: friendData.userPhoto
    });
    // Update request status for this specific user
    setRequestStatus((prevStatus) => ({
      ...prevStatus,
      [friendData.userID]: true
    }));
  };


  
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
      <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">Connect with others</h1>
      <h2 className='text-xl font-regular text-center mb-8'>Add new friends and start a conversation</h2>
      {
        allusers.map((item)=>(
          <div className="max-w-3xl mx-auto" key={item.key}>        
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

            <div className='flex gap-[10px]'>
              {/* ========add button part start=========== */}
              {
                 requestStatus[item.userID] ? //ei specific user id er requestStatus ta ki true naki false, sheita check hocchhe
                <button className="flex justify-center items-center gap-[5px] text-white bg-gray-400 font-medium py-[10px] px-[15px] rounded">
                  <FaHourglassEnd className='text-[15px] text-black'/>Request sent
                </button>
                :
                <button onClick={()=>handleAdd(item)} className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
                  <IoPersonAdd className='text-[15px]'/>Add
                </button>
              }

            
             {/* ========add button part end=========== */}
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

export default PeopleComponent