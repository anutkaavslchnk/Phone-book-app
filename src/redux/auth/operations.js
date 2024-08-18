import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setCleanToken, setToken } from "../../config/api";

export const logInThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await api.post("users/login", credentials);
        const data = response.data;  
        console.log("Login response data:", data);

        setToken(data.token);  
       
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const registerThunk = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
    try {
        const response = await api.post("users/signup", credentials);
        const data = response.data;  
        console.log("Register response data:", data);

        setToken(data.token);  
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await api.post('/users/logout');
        setCleanToken();  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const getMeThunk = createAsyncThunk('auth/current', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (!savedToken) {
        return thunkAPI.rejectWithValue("Token does not exist");
    }

    try {
        setToken(savedToken);  
        const response = await api.get('users/current');
        const data = response.data;  
        console.log("Current user data:", data);
        
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});