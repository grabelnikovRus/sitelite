import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductActions } from "../store/slices/addProductSlice"
import { getProductAdapter } from "../store/slices/addProductSlice"
import { CardProduct } from "../components/CardProduct"

export const App = () => {
    const dispatch = useDispatch()
    const products = useSelector(getProductAdapter.selectAll)
console.log(products)
    useEffect(() => {
        dispatch(addProductActions.init())
    }, [])
    return <div>{products.map((item) => (<CardProduct {...item} />))}</div>
}