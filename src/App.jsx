import { useState } from 'react'
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


function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassPage/>}/>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element = {<Homepage/>}/>
        </Route>
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
