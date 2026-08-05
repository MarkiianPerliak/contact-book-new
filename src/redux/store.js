import { createStore } from "redux";
import { contactsReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer: contactsReducer})
