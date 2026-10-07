import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { userReducer } from "./user/userSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filterReducer } from "./filterReducer";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["user"]
};




const rootReduce = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: userReducer
});

const persisterReducer = persistReducer(persistConfig, rootReduce);

export const store = configureStore({
  reducer: persisterReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export let persistor = persistStore(store);