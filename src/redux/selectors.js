import { createSelector } from '@reduxjs/toolkit'
import { contactAdapter } from './reducer'
import { filterValue } from "./constants"

export const { selectAll:selectContacts, selectIds, selectById } = contactAdapter.getSelectors(state => state.contacts)


export const selectFilter = (state) => state.filter.filter

export const selectIsLoading = (state) => state.contacts.isloading

export const selectErrorMessage = (state) => state.contacts.errorMessage

export const selectAddContactLoader = (state) => state.contacts.addContactLoader


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter], (contacts, filter) => {
    switch (filter) {
      case filterValue.saved:
      return contacts.filter((contact) => {
        return contact.saved === true
      })
    
      default:
      return contacts
    }
  }
)