import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addIdsActions } from "../store/slices/addIdsSlice"
import { getProductAdapter } from "../store/slices/addProductSlice"
import { CardProduct } from "../components/CardProduct"

export const App = () => {
    const dispatch = useDispatch()
    const products = useSelector(getProductAdapter.selectAll)
console.log(products)
    useEffect(() => {
        dispatch(addIdsActions.init())
    }, [])
    return <div>{products.map((item) => (<CardProduct {...item} />))}</div>
}