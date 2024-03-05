import { configureStore } from "@reduxjs/toolkit";
import { apiRtk } from "../api/apiRtk";
import { api } from "../api/api"
import { productListMiddleware } from "./middleware"
import { addProductReducer } from "./slices/addProductSlice";

export const store = configureStore({
    reducer: {
        [apiRtk.reducerPath]: apiRtk.reducer,
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