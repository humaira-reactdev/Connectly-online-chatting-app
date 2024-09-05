import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')): null
  },
  reducers: {
   
    userData: (state, action) => {
      state.userData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData} = userSlice.actions

export default userSlice.reducer