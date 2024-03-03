import { createListenerMiddleware } from "@reduxjs/toolkit";
import { addIdsActions } from "./slices/addIdsSlice"
import { fetchIds,fetchProduct } from "./services"

export const productListMiddleware = createListenerMiddleware();
export const startUserMiddleware = productListMiddleware.startListening;
startUserMiddleware({
  actionCreator: addIdsActions.init,
  effect: async (_, api) => {
    await api.dispatch(fetchIds())
    await api.dispatch(fetchProduct())
  },
});
