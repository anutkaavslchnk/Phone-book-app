import { configureStore } from "@reduxjs/toolkit";


import { contactsSliceReducer } from "./contacts/contactsSlice";
import { filtersSliceReducer } from "./filters/filtersSlice";
import { sliceReducer } from "./auth/slice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist:[`token`],
}

const persistedAuthReducer = persistReducer(persistConfig, sliceReducer);

export const store=configureStore({
    reducer:{
      contacts: contactsSliceReducer,
      filters:filtersSliceReducer,
      auth:  persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
  });
  export const persistor = persistStore(store)
