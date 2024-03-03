import React, { useEffect } from "react"

import { useGetPQuery } from "../api"

export const App = () => {
    const { data, isLoading } = useGetPQuery();
    console.log(data)
    return <div>dsdscdcdcdcdcdsdsd</div>
}