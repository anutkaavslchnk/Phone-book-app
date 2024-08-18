import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setCleanToken, setToken } from "../../config/api";

export const LogInThunk=createAsyncThunk('auth/login', async(credentials, thunkAPI)=>{
    try {
        const data=await api.post("users/login", credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const RegisterThunk=createAsyncThunk('auth/signup', async(credentials, thunkAPI)=>{
    try {
        const data=await api.post("users/signup", credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const LogOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await api.post('/users/logout');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });