import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization
}

export const signUp = createAsyncThunk("user/signup",
    async (account, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(`https://connections-api.goit.global/users/signup/`, account)
            setAuthHeader(data.token)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logIn = createAsyncThunk("user/login",
    async (account, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(`https://connections-api.goit.global/users/login/`, account)
            setAuthHeader(data.token)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logOut = createAsyncThunk("user/logout",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(`https://connections-api.goit.global/users/logout`)
            clearAuthHeader()
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk("user/refreshuser",
    async (_, {rejectWithValue, getState}) => {
        try {
            const state = getState()
            const token = state.user.token
            if (!token) {
                return rejectWithValue("No token")
            }
            setAuthHeader(token)
            const {data} = await axios.post(`https://connections-api.goit.global/users/current`)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

// {
//     "user": {
//         "name": "Markiian Perliak",
//         "email": "dhhj@gmail.com"
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWJkMzNkM2I5YTg3ZjA2YjQ3OWRjNDgiLCJpYXQiOjE3OTA3ODQ0Njd9.DkcqxvtFYqbJIVKQyB4n4R4V7JqmVSYgv_1_vRK4Eho"
// }
// dsdasdadsdadas