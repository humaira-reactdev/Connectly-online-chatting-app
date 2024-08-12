import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import { ToastContainer } from 'react-toastify'

function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}></Route>         
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
