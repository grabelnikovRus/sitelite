import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    "addProduct/fetchProduct",
    async (offset = 0, { rejectWithValue, extra, getState }) => {
      try {
        const resultIds = await extra.api.get({
          action: "get_ids",
          params: {
            offset,
            limit: 50
          },
        });

        const ids = await resultIds.json();
        
        const res = await extra.api.get({
          action: "get_items",
          params: { ids: ids.result },
        });
  
        return await res.json();
      } catch {
        return rejectWithValue("error");
      }
    }
  );