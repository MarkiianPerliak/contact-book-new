import { act } from 'react';
import { actionType, filterValue } from './constants';
import { createSlice, current, createEntityAdapter } from '@reduxjs/toolkit';
import { addContacts, checkContact, deleteContacts, getContacts } from "./operation";

// const initialState = {
//   contacts: [],
//   filter: filterValue.all,
//   isloading: false,
//   errorMessage: "",
//   addContactLoader: false
// };
export const contactAdapter = createEntityAdapter();
console.log(contactAdapter)
const initialState = contactAdapter.getInitialState({isloading: false, errorMessage: "", addContactLoader: false})
// export const contactsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionType.addType:
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             }
//             break;
//             case actionType.delType:
//                 return {
//                     ...state,
//                     contacts: state.contacts.filter((contact) => contact.id !== action.payload.id)
//                 }
//             break;
//             case actionType.saveType:
//                 return {
//                     ...state,
//                     contacts: state.contacts.map((contact) => contact.id === action.payload.id ? {...contact, saved: !contact.saved} : contact)
//                 }
//             break;
//             case actionType.changeType:
//                 return {
//                     ...state,
//                     filter: action.payload.filter
//                 }
//         default:
//             return state
//             break;
//     }
// }

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  extraReducers: (builder) => {
    
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.isloading = false
      contactAdapter.setAll(state, action.payload)
    })
    builder.addCase(getContacts.rejected, (state, action) => {
      state.isloading = false
      state.errorMessage = action.payload
    })
    builder.addCase(getContacts.pending, (state, action) => {
      state.isloading = true
      state.errorMessage = ""
    })


    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.addContactLoader = false
      contactAdapter.addOne(state, action.payload)
    })
    builder.addCase(addContacts.rejected, (state, action) => {
      state.addContactLoader = false
      state.errorMessage = action.payload
    })
    builder.addCase(addContacts.pending, (state, action) => {
      state.addContactLoader = true
    })


    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      contactAdapter.removeOne(state, action.payload)
    })
    builder.addCase(checkContact.fulfilled, (state, action) => {
      contactAdapter.updateOne(state, {id: action.payload.id, changes: action.payload})
    })
  }
});


export const { addContact, removeContact, saveContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
