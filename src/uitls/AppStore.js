import {configureStore}  from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import movieReducer from "./movieSlice"

const Appstroe=configureStore({
    reducer:{
        user : userReducer,
        movies:movieReducer
    }
})

export default Appstroe;