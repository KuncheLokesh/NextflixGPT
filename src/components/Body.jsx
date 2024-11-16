import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../uitls/firebaseconfig';
import { adduser,removeuser } from '../uitls/UserSlice'

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
    const dispatch=useDispatch();

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user)
        const {uid,email,displayName}=user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}));
        // navigate("/browse")
        // ... 
        } else {
        // User is signed out
        dispatch(removeuser());
        // ...
        // navigate("/")
        }
    });
   },[])

  return (
    <div>
        <RouterProvider router={apprRouter} ></RouterProvider>
    </div>
  )
}   

export default Body