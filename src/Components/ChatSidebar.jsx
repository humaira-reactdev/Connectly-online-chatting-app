import React from 'react'

const ChatSidebar = () => {
  return (
    <>
        <div className='w-[300px] min-h-screen border-2 border-[#8E3E63] font-montserrat overflow-y-scroll'>
            <h1 className='text-xl font-bold text-black text-center p-5 mb-5'>Conversations</h1>
            <div
              key=''
              className="flex items-center justify-between p-4 bg-white rounded-lg mb-4 hover:cursor-pointer "
            >
              <div className="flex items-center">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src=''
                  alt='profile picture'     
                />
                <span className="ml-4 text-lg font-semibold text-[#363636]">
                  Lorem, ipsum.
                </span>
              </div>
            </div>
        </div>
    
    </>
  )
}

export default ChatSidebar