import React from 'react'

const Chatbox = () => {
  return (
    <>
        <div className='chatbox'>
         <div className='namebar bg-[#8E3E63] w-[1200px] h-[80px] p-5 font-montserrat'>
          <div className="flex items-center">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src=''
              alt='profile picture'     
            />
            <span className="ml-4 text-lg font-semibold text-white">
              Lorem, ipsum.
            </span>
          </div>
         </div>
         <div className='messageBox w-full h-[800px] bg-slate-100 p-5 overflow-y-scroll'>
          <div className='receiveMsg w-fit py-1 px-3 bg-[#8E3E63] rounded-xl'>Lorem, ipsum.</div>
          <div className='sendMsg w-fit ml-auto py-1 px-3 bg-[#B7B7B7] rounded-xl text-black' >Lorem, ipsum.</div>
         </div>
      </div>
      </>
  )
}

export default Chatbox