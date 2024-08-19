import { createSelector, createSlice } from "@reduxjs/toolkit";

import { addContact, deleteContact, fetchContacts} from "./contactsOps";
import { selectContacts, selectFilter } from "../selectors";
import toast, { Toaster } from "react-hot-toast";



const initialState = {
  items: [],
  isLoading:false,
  isError:false,

};
 export const selectFilteredContacts=createSelector([selectContacts, selectFilter], (contacts,filter)=>{
  return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.toLowerCase().includes(filter.toLowerCase()));
})
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers:builder=>{
    builder.addCase(fetchContacts.fulfilled, (state, action)=>{
      state.items=action.payload;
      state.isLoading=false;
    })
    .addCase(fetchContacts.pending, (state, action)=>{
      state.isLoading=true;

    })
  
    .addCase(deleteContact.fulfilled,(state, action)=>{
      state.items=state.items.filter(item=> item.id !== action.payload);
      toast.success('Contact is deleted!');
    })
    .addCase(addContact.fulfilled, (state, action)=>{
      state.items.push(action.payload);
       toast.success('Contact is added!');
    
     
    })
    .addCase(deleteContact.rejected,(state, action)=>{
     state.isError=true;
     toast.error('Sorry, something went wrong, try again!');
    })
  }
});


export const contactsSliceReducer = contactsSlice.reducer;