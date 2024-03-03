import { createSlice } from "@reduxjs/toolkit";
import { fetchIds } from "../services"

const addIdsSlice = createSlice({
  name: "addIds",
  initialState: {
    offset: 0,
    ids: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {
    init() { console.log(1)},
    setOffset(state, action) {
      state.offset = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchIds.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchIds.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.ids = action.payload.result
    });
    addCase(fetchIds.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: addIdsActions, reducer: addIdsReducer } = addIdsSlice;
