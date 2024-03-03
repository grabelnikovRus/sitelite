import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { authString } from "../config/auth"

export const apiRtk = createApi({
    reducerPath: "apiRtk",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://api.valantis.store:40000/",
        prepareHeaders: (headers, { getState }) => {
            headers.set("X-Auth", authString)
            return headers
        },
    }),
    endpoints: (build) => ({
      getIds: build.query({
        query: ({ offset = 0 }) => ({ 
            method: "POST",
            body: {
                "action": "get_ids",
                "params": {
                    "offset": offset, 
                    "limit": 50
                }
            }
        }),
      }),
    }),
  })

  export const { useGetIdsQuery } = apiRtk