import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContactById } from './operations';

const initialState = {
    contacts: [],
    status: 'idle',
    error: null,
  };
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.contacts = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
          state.contacts.push(action.payload);
        })
        .addCase(deleteContactById.fulfilled, (state, action) => {
          const contactId = action.payload;
          const index = state.contacts.findIndex((contact) => contact._id === contactId);
          if (index !== -1) {
            state.contacts.splice(index, 1);
          }
        });
    },
  });
  
export const contactsReducer = contactsSlice.reducer;