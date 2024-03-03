import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { authString } from "../config/auth"

export const api = createApi({
    reducerPath: "/",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://api.valantis.store:40000/",
        prepareHeaders: (headers, { getState }) => {
            headers.set("X-Auth", authString)
            return headers
        },
    }),
    endpoints: (build) => ({
      getP: build.query({
        query: () => ({ 
            method: "POST",
            body: {
                "action": "filter",
                "params": {"price": 17500.0}
            }
        }),
      }),
    }),
  })

  export const { useGetPQuery } = api