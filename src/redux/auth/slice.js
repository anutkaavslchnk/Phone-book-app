import { createSlice } from "@reduxjs/toolkit";
import { getMeThunk, logInThunk, logOutThunk, registerThunk } from "./operations";


const initialState={
    user: {
      name: '',
      email: '',
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
  .addCase(logInThunk.fulfilled, (state, action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
    state.isLoggedIn=true;
    state.isRefreshing = false;
 
  })
  .addCase(registerThunk.fulfilled, (state, action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
    state.isLoggedIn=true;
    state.isRefreshing = false;
 

  })
  .addCase(logOutThunk.fulfilled, ()=>{
    return initialState;
  })
  .addCase(getMeThunk.fulfilled,(state, action)=>{
    state.isLoggedIn=true;
    state.isRefreshing = false; 
    state.user.name=action.payload.name;
    state.user.email=action.payload.email;
  })
  .addCase(getMeThunk.pending,(state, action)=>{
    state.isRefreshing=true;
  })
  .addCase(getMeThunk.rejected,(state, action)=>{
    state.isRefreshing=false;
  })
}
});
 export const sliceReducer=slice.reducer;