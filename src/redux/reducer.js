import { act } from "react";
import { actionType, filterValue } from "./constants"

const initialState = {  contacts: [
    {
        id: crypto.randomUUID(),
        text: "Friend",
        number: "09764946782",
        saved: false
    },
    {
        id: crypto.randomUUID(),
        text: "Friend 1",
        number: "09735434564",
        saved: false
    },
    {
        id: crypto.randomUUID(),
        text: "Friend 2",
        number: "09762096865",
        saved: true
    },
],
  filteredContacts: [
        {
        id: crypto.randomUUID(),
        text: "Friend",
        number: "09764946782",
        saved: false
    },
    {
        id: crypto.randomUUID(),
        text: "Friend 1",
        number: "09735434564",
        saved: false
    },
    {
        id: crypto.randomUUID(),
        text: "Friend 2",
        number: "09762096865",
        saved: true
    },
  ],
  filter: filterValue.all
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.addType:
            return {
                ...state,
                filteredContacts: [...state.contacts, action.payload],
                contacts: [...state.contacts, action.payload]
            }
            break;
            case actionType.delType:
                return {
                    ...state,
                    filteredContacts: state.contacts.filter((contact) => contact.id !== action.payload.id),
                    contacts: state.contacts.filter((contact) => contact.id !== action.payload.id)
                }
            break;
            case actionType.saveType:
                return {
                    ...state,
                    filteredContacts: state.contacts.map((contact) => contact.id === action.payload.id ? {...contact, saved: !contact.saved} : contact),
                    contacts: state.contacts.map((contact) => contact.id === action.payload.id ? {...contact, saved: !contact.saved} : contact)
                }
            break;
            case actionType.changeType:
                const visibleContacts = state.filter !== "saved" ? state.contacts.filter(contact => contact.saved) : state.contacts;
                return {
                    ...state,
                    filteredContacts: visibleContacts,
                    filter: action.payload.filter
                }
        default:
            return state
            break;
    }
}