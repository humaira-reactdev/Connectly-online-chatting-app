import React, { useEffect, useState } from 'react'
import { MdNotInterested } from "react-icons/md";
import { IoPersonRemove } from "react-icons/io5";
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { chatUserDataReducer } from '../Slice/ChatUserSlice';

const ChatSidebar = () => {
  //============get data from redux==============//
  const sliceUserData = useSelector((state) => state.counter.userData)
  const dispatch=useDispatch()
      
  // =================custom hooks================//
  const [friends, setFriends] = useState([]);
  // =====================firebase variables===================//
  const db = getDatabase();

  //=====================function to display friends===================//
  useEffect(() => {
    const starCountRef = ref(db, 'friends/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(item.val().currentUserID==sliceUserData.uid){
          arr.push({ friendID:item.val().friendID, friendName: item.val().friendName, friendPhoto: item.val().friendPhoto, key:item.key });
        }else if (item.val().friendID==sliceUserData.uid){
          arr.push({friendID: item.val().currentUserID, friendName: item.val().currentUsername, friendPhoto: item.val().currentUserphoto, key: item.key})
        }
        
      });
      setFriends(arr);
    });
  }, [db]);
  
  // ============sending data to slice===========//
  const handleUserData=(data)=>{
    dispatch(chatUserDataReducer(data))
    localStorage.setItem('chatUser', JSON.stringify(data))
  }

  return (
    <>
        <div className='w-[300px] min-h-screen border-2 border-[#8E3E63] font-montserrat overflow-y-scroll'>
            <h1 className='text-xl font-bold text-black text-center p-5 mb-5'>Conversations</h1>
            {
              friends.map((item)=>(
                <div onClick={()=>handleUserData(item)}
                key={item.key}
                className="flex items-center justify-between p-4 bg-white rounded-lg mb-4 hover:cursor-pointer "
              >
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src=''
                    alt='profile picture'     
                  />
                  <span className="friendName ml-4 text-lg font-semibold text-[#363636]">
                  {item.friendName}
                  </span>
                </div>
              </div>
              ))
            }
           
        </div>
    
    </>
  )
}

export default ChatSidebar