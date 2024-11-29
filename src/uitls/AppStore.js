import {configureStore}  from "@reduxjs/toolkit"
import userReducer from "./UserSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import languReducer from "./lanugaeSlice"

const Appstroe=configureStore({
    reducer:{
        user : userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        language:languReducer
    }
})

export default Appstroe;