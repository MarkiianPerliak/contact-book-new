import { filterValue } from "./constants"

export const selectContacts = (state) => state.contacts.contacts

export const selectFilter = (state) => state.filter.filter

export const selectIsLoading = (state) => state.contacts.isloading

export const selectErrorMessage = (state) => state.contacts.errorMessage

export const selectAddContactLoader = (state) => state.contacts.addContactLoader

export const selectVisibleContacts = (state) => {return state.contacts.contacts.filter((contact) => {
    switch (state.contacts.filter) {
      case filterValue.saved:
      return contact.saved === true
    
      default:
      return true
    }
  })}