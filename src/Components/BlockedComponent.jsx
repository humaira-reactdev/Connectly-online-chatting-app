import React, { useEffect, useState } from 'react'
import { CgUnblock } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";


const BlockedComponent = () => {

  // =============get data from redux==============//
  const sliceUserData = useSelector((state) => state.counter.userData)

  // =======================custom state============//
    const [blockFriend, setBlockFriend]=useState([])


  // ======================firebase variables===================//
  const db = getDatabase();

  // ====================functions===========//

  // =========unblock button function============//
  const handleUnblock=(friendData)=>{
    set(push(ref(db, 'friends/')), {
      currentUserID: sliceUserData.uid,
      currentUsername: sliceUserData.displayName,
      currentUserphoto: sliceUserData.photoURL,
      friendID: friendData.friendID,
      friendName: friendData.friendName,
      friendPhoto: friendData.friendPhoto
    });
    remove(ref(db, 'blocklist/'+friendData.key))
  }

  useEffect(()=>{
    const starCountRef = ref(db,'blocklist/');
      onValue(starCountRef, (snapshot) => {
      let arr=[]
      snapshot.forEach((item)=>{
        if(item.val().currentUserID==sliceUserData.uid){
          arr.push({...item.val(), key: item.key})
        }
      })
      setBlockFriend(arr)
    });

  },[])
  
  return (
    <>
        <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
        <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">People you've blocked</h1>
        <h2 className='text-xl font-regular text-center mb-8'>These people will not be able to connect with you unless you unblock them</h2>
        {
          blockFriend.map((item)=>(
            <div className="max-w-3xl mx-auto">        
          <div
            key={item.key}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={item.friendPhoto}
                alt=''
              />
              <span className="ml-4 text-lg font-semibold text-[#363636]">{item.friendName}            
              </span>
            </div>
            <div className='flex gap-[10px]'>
              <button onClick={()=>handleUnblock(item)} className="flex justify-center items-center gap-[5px] text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-[10px] px-[15px] rounded">
              <CgUnblock className='text-[18px]'/>Unblock
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

export default BlockedComponent