import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'

function App() {
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>}/>         
      </Route>

    )
  )
  
  return (
    <>
     <RouterProvider router={route}/>      
    </>
  )
}

export default App
