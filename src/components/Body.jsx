import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
    // const navigate=useNavigate();
    const apprRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  

   

  return (
    <div>
        <RouterProvider router={apprRouter} ></RouterProvider>
    </div>
  )
}   

export default Body