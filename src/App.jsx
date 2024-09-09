import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import { ToastContainer } from 'react-toastify'
import database from './firebase.config'
import ForgotPassPage from './Pages/ForgotPassPage'
import NotFound from './Pages/NotFound'
import LayoutOne from './Layouts/LayoutOne'
import Homepage from './Pages/Homepage'
import { useDispatch } from 'react-redux'
import { userData } from './Slice/userSlice'
import Messages from './Pages/Messages'
import People from './Pages/People'
import FriendsPage from './Pages/FriendsPage'
import BlockedPage from './Pages/BlockedPage'


function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        // Retrieve user data from localStorage on page load
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            dispatch(userData(JSON.parse(storedUserData)));
        }
    }, [dispatch]);
    
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element = {<Homepage/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/people' element={<People/>}/>
          <Route path='/friends' element={<FriendsPage/>}/>
          <Route path='/blocked' element={<BlockedPage/>}/>    
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassPage/>}/>
        
        <Route path='*' element={<NotFound/>}/>      
      </Route>

    )
  )
  
  return (
    <>
     <RouterProvider router={route}/>  
     <ToastContainer />    
    </>
  )
}

export default App
