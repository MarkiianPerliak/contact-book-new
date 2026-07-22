import { actionType } from "./constants"

export const addContact = (text, number) => {
    return {
        type: actionType.addType,
        payload:     {
        id: crypto.randomUUID(),
        text: text,
        number: number,
        saved: false
    },
    }
}

export const removeContact = (contactid) => {
    return {
        type: actionType.delType,
        payload: {
            id: contactid
        }
    }
}

export const saveContact = (contactid) => {
    return {
        type: actionType.saveType,
        payload: {
            id: contactid
        }
    }
}

export const changeFilter = (filter) => {
    return {
        type: actionType.changeType,
        payload: {
            filter: filter
        }
    }
}