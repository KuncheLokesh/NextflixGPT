import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:"languageSelection",
    initialState:{
        langugePrefered:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.langugePrefered=action.payload;
        }
    }
})


export const {changeLanguage}=languageSlice.actions;
export default languageSlice.reducer;
