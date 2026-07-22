import { filterValue } from "./constants"

export const selectVisibleContacts = (state) => {return state.contacts.filter((contact) => {
    switch (state.filter) {
      case filterValue.saved:
      return contact.saved === true
    
      default:
      return true
    }
  })}