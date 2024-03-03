import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIds = createAsyncThunk(
  "addIds/fetchIds",
  async (offset = 0, { rejectWithValue, extra, getState }) => {
    try {
      const res = await extra.api.get({
        action: "get_ids",
        params: {
          offset,
          limit: 50
        },
      });

      return await res.json();
    } catch {
      return rejectWithValue("error");
    }
  }
);

export const fetchProduct = createAsyncThunk(
    "addProduct/fetchProduct",
    async (_, { rejectWithValue, extra, getState }) => {
      const ids = getState().idsProduct.ids
      try {
        const res = await extra.api.get({
          action: "get_items",
          params: { ids },
        });
  
        return await res.json();
      } catch {
        return rejectWithValue("error");
      }
    }
  );