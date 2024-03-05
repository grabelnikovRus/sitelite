import { createAsyncThunk } from "@reduxjs/toolkit";
import { LIMIT } from "../config/constants"

export const fetchProduct = createAsyncThunk(
    "addProduct/fetchProduct",
    async (offset = 0, { rejectWithValue, extra, getState }) => {
      try {
        const resultIds = await extra.api.get({
          action: "get_ids",
          params: {
            offset,
            limit: LIMIT
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