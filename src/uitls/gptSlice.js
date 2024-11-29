import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptSearch",
    initialState:{
        showgptPage:false
    },
    reducers:{
        tooglegptSearch:(state,action)=>{
            state.showgptPage=!state.showgptPage;
        }
    }
})

export const {tooglegptSearch} =gptSlice.actions;

export default gptSlice.reducer