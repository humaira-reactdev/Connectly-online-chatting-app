import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slice/userSlice'
import ChatUserSlice from './Slice/ChatUserSlice'

export default configureStore({
  reducer: {
    counter: userSlice,
    chatData: ChatUserSlice
  },
})