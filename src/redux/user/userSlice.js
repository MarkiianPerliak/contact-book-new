import { createSlice } from "@reduxjs/toolkit";
import SignIn from "pages/SignIn";
import { logIn, logOut, refreshUser, signUp } from "./userOperations";
const userSlice = createSlice({
    name: "user",
    initialState: {user: {email: "", name: ""}, token: "", isLogged: false},

    extraReducers: builder => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
            state.isLogged = true
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
            state.isLogged = true
        });
        builder.addCase(logOut.fulfilled, (state, action) => {
            state.user = {email: "", name: ""};
            state.token = ""
            state.isLogged = false
        });
        builder.addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
            state.isLogged = true
        });
    }
})

export const userReducer = userSlice.reducer