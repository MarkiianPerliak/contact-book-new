import { createStore } from "redux";
import { contactsReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = createStore(contactsReducer, devToolsEnhancer())