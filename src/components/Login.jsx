import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const handleToggle=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <img  className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg' alt='image of Nteflix'/>
        <div className="w-full h-screen flex justify-center items-center">
            <form className="absolute bg-black bg-opacity-80 p-10 rounded-lg text-white w-full max-w-md">
                <h1 className="mb-8 font-bold text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm&&<input
                className="w-full mb-6 p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                type="text"
                placeholder="Full Name"
                />}
                <input
                className="w-full mb-6 p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                type="email"
                placeholder="Email"
                />
                <input
                className="w-full mb-6 p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                type="password"
                placeholder="Password"
                />
                <button className="w-full py-3 rounded bg-red-600 hover:bg-red-700 transition duration-300">
                {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <div>
                    <p className='my-10 cursor-pointer' onClick={handleToggle}>{isSignInForm?"New Memeber please click here to SignUp":"already a memeber please click here to Sign In"}</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login