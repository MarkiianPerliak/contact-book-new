import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
};

const persisterReducer = persistReducer(persistConfig, contactsReducer);


const rootReduce = combineReducers({
  contacts: persisterReducer,
//   filter: filterReducer,
});


export const store = configureStore({
  reducer: rootReduce,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export let persistor = persistStore(store);