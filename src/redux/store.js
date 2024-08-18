import { configureStore } from "@reduxjs/toolkit";


import { contactsSliceReducer } from "./contacts/contactsSlice";
import { filtersSliceReducer } from "./filters/filtersSlice";
import { sliceReducer } from "./auth/slice";



export const store=configureStore({
    reducer:{
      contacts: contactsSliceReducer,
      filters:filtersSliceReducer,
      auth:sliceReducer,
    },
  
  });
