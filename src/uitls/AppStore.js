import {configureStore}  from "@reduxjs/toolkit"
import userReducer from "./UserSlice";

const Appstroe=configureStore({
    reducer:{
        user : userReducer
    }
})

export default Appstroe;