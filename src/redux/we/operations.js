import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

export const fetchWe = createAsyncThunk("we/fetchWe", async () => {
  const response = await api.get("/we");
 console.log(response.data)
  return response.data;
});

export const addWe = createAsyncThunk(
  "we/addNewWe",
  async (we) => {
    const response = await api.post("/we", we);
    return response.data;
  }
);





export const deleteWe = createAsyncThunk(
  "we/deleteWe",
  async (id) => {
    await api.delete(`/we/${id}`);
    return id;
  }
);