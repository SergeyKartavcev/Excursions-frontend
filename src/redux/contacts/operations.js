import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../utils/api';

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const response = await api.get("/contacts");
  return response.data;
});

export const addNewContact = createAsyncThunk(
  "contacts/addNewContact",
  async (contact) => {
    const response = await api.post("/contacts", contact);
    return response.data;
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContactById",
  async (id) => {
    await api.delete(`/contacts/${id}`);
    return id;
  }
);
