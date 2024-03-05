import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchProduct } from "../services"

const productAdapter = createEntityAdapter({
  selectId: (product) => product.id,
});

export const getProductAdapter = productAdapter.getSelectors(
  (state) => state.product || productAdapter.getInitialState()
);

const initialState = productAdapter.getInitialState({
    offset: 0,
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  })

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    init() {},
    setOffset(state, action) {
      state.offset = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      productAdapter.addMany(state, action.payload.result);
    });
    addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: addProductActions, reducer: addProductReducer } = addProductSlice;
