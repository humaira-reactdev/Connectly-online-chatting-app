import { createSlice } from '@reduxjs/toolkit'

export const chatUser = createSlice({
  name: 'chatData',
  initialState: {
    chatUserData: JSON.parse(localStorage.getItem('chatUser'))? JSON.parse(localStorage.getItem('chatUser')):null
  },
  reducers: {
   
    chatUserDataReducer: (state, action) => {
      state.chatUserData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {chatUserDataReducer} = chatUser.actions

export default chatUser.reducer