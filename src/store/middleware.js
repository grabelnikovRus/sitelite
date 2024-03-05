import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addProductActions } from "./slices/addProductSlice"
import { fetchProduct } from "./services"

export const productListMiddleware = createListenerMiddleware();
export const startUserMiddleware = productListMiddleware.startListening;
startUserMiddleware({
  actionCreator: addProductActions.init,
  effect: async (_, api) => {
    await api.dispatch(fetchProduct())
  },
});
