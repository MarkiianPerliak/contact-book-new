import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk("contacts/get", 
    async (_, {rejectWithValue}) => {
        try {
            
            const {data} = await axios.get(`https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/phones`)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addContacts = createAsyncThunk("contacts/post", 
    async ({text, number}, {rejectWithValue}) => {
        try {
            
            const {data} = await axios.post(`https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/phones`, {text: text, number: number, saved: false})
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteContacts = createAsyncThunk("contacts/delete", 
    async (id, {rejectWithValue}) => {
        try {
            
            await axios.delete(`https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/phones/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const checkContact = createAsyncThunk("contacts/put", 
    async ({id, ...task}, {rejectWithValue}) => {
            try {
                const {data} = await axios.put(`https://6a8edbd1a12b7de8cc0f0f15.mockapi.io/phones/${id}`, {saved: !task.saved})
                return data
            } catch (error) {
                return rejectWithValue(error.message)
            }
    }
)