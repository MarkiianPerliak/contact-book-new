import { act } from 'react';
import { actionType, filterValue } from './constants';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      id: crypto.randomUUID(),
      text: 'Friend',
      number: '09764946782',
      saved: false,
    },
    {
      id: crypto.randomUUID(),
      text: 'Friend 1',
      number: '09735434564',
      saved: false,
    },
    {
      id: crypto.randomUUID(),
      text: 'Friend 2',
      number: '09762096865',
      saved: true,
    },
  ],
  filter: filterValue.all,
};

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
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: (text, number) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            text: text,
            number: number,
            saved: false,
          },
        };
      },
    },
    removeContact: {
      reducer: (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      },
    },
    saveContact: {
      reducer: (state, action) => {
        state.contacts = state.contacts.map(contact =>
          contact.id === action.payload
            ? { ...contact, saved: !contact.saved }
            : contact
        );
      },
    },
    changeFilter: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },
    },
  },
});
export const { addContact, removeContact, saveContact, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
