import React from 'react'
import { IoMdSend } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from 'react';

const Chatbox = () => {
  // ============redux data========//
  const userData=useSelector((state)=>state.chatData.chatUserData)
  const sliceUserData = useSelector((state) => state.counter.userData)
  
  // ==========custom states==========//
  const [messages, setMessages] = useState('');
  const [chatMsg, setChatMsg] = useState([]);

  //===========firebase variables============//
  const db = getDatabase();



  //================functions=================//

  // Realtime date and time
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const handleSend=()=>{
    set(push(ref(db, 'message/')), { 
      senderId: sliceUserData.uid,
      receiverId: userData.friendID,
      message: messages,
      megTime: formatAMPM(new Date()), // Sending formatted time along with the message
    });
    setMessages(''); // Clear the input field after sending the message
  }

  //send message on pressing enter key//
  const handleKey=(e)=>{
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  //=================realtime database===============//

   // Getting messages from Firebase
   useEffect(() => {
    const starCountRef = ref(db, 'message/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().senderId === sliceUserData.uid && item.val().receiverId === userData.friendID) ||
          (item.val().receiverId === sliceUserData.uid && item.val().senderId === userData.friendID)
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setChatMsg(arr);
    });
  }, [userData, sliceUserData]);



  return (
    <>
        <div className='chatbox flex flex-col h-screen'>
         <div className='namebar bg-[#8E3E63] w-[1000px] h-[80px] p-5 font-montserrat'>
          <div className="flex items-center">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src=''
              alt='profile picture'     
            />
            <span className="friendName ml-4 text-lg font-semibold text-white">
              {userData?.friendName}
            </span>
          </div>
         </div>
         <div className='messageBox w-full flex-grow bg-slate-100 p-5 overflow-y-scroll'>
          {
            chatMsg.map((item)=>{
              return(
                item.senderId == sliceUserData.uid?
                <div key={item.key} className='sendMsg w-fit ml-auto py-1 px-3 bg-[#B7B7B7] rounded-xl text-black mb-2' >{item.message}</div>
              :
              
              <div key={item.key} className='receiveMsg w-fit py-1 px-3 bg-[#8E3E63] rounded-xl mb-2'>{item.message}</div>
              )
              

            })
          }        
            
         </div>  
         <div className='msgInput border-t-2 border-t-[#8E3E63] flex p-[10px]'>
          <input value={messages}
          onChange={(e) => setMessages(e.target.value)} onKeyDown={(e)=>handleKey(e)} type="text" className='w-full outline-none text-black' placeholder='Type something...' />
          <button onClick={handleSend} className='text-xl text-black'><IoMdSend /></button>
         </div>
      </div>
      </>
  )
}

export default Chatbox