import { filterValue } from "./constants"

export const selectVisibleContacts = (state) => {return state.contacts.contacts.filter((contact) => {
    switch (state.contacts.filter) {
      case filterValue.saved:
      return contact.saved === true
    
      default:
      return true
    }
  })}