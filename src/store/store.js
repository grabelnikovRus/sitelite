import { configureStore } from "@reduxjs/toolkit";
import { apiRtk } from "../api/apiRtk";
import { api } from "../api/api"
import { addIdsReducer } from "./slices/addIdsSlice"
import { productListMiddleware } from "./middleware"
import { addProductReducer } from "./slices/addProductSlice";

export const store = configureStore({
    reducer: {
        [apiRtk.reducerPath]: apiRtk.reducer,
        idsProduct: addIdsReducer,
        product: addProductReducer
    },
    middleware: (getDefault) => getDefault({
        thunk: {
            extraArgument: { api },
        },
    }).concat(
        productListMiddleware.middleware,
        apiRtk.middleware
    )
})