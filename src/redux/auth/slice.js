import { createSlice } from "@reduxjs/toolkit";
import { LogInThunk, LogOutThunk, RegisterThunk } from "./operations";


const initialState={
    user: {
      name: null,
      email: null,
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  }
const slice=createSlice({
name:'auth',
initialState,
extraReducers:builder=>{
  builder
  .addCase(LogInThunk.fulfilled, (state, action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
    state.isLoggedIn=true;
 
  })
  .addCase(RegisterThunk.fulfilled, (state, action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
    state.isLoggedIn=true;
 

  })
  .addCase(LogOutThunk.fulfilled, ()=>{
    return initialState;
  })
}
});
 export const sliceReducer=slice.reducer;