import { configureStore } from "@reduxjs/toolkit";


import { contactsSliceReducer } from "./contacts/contactsSlice";
import { filtersSliceReducer } from "./filters/filtersSlice";



export const store=configureStore({
    reducer:{
      contacts: contactsSliceReducer,
      filters:filtersSliceReducer,
    },
  
  });
