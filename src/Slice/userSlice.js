import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')): null
  },
  reducers: {
   
    userData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData} = counterSlice.actions

export default counterSlice.reducer