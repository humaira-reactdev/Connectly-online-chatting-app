import React from 'react'
import ChatSidebar from './ChatSidebar'
import Chatbox from './Chatbox'

const MessagesComponent = () => {
  return (
    <>
      <div className='flex'>
        <ChatSidebar/>
        <Chatbox/>
      </div>
     
     </>
  )
}

export default MessagesComponent