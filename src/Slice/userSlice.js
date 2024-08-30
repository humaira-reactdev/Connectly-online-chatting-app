import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')): null
  },
  reducers: {
   
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData} = userSlice.actions

export default userSlice.reducer