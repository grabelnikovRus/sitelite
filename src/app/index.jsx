import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductActions } from "../store/slices/addProductSlice"
import { getProductAdapter } from "../store/slices/addProductSlice"
import { CardProduct } from "../components/card-product"

import "./index.scss"
import { Pagination } from "../components/pagination"

export const App = () => {
    const dispatch = useDispatch()
    const products = useSelector(getProductAdapter.selectAll)

    useEffect(() => {
        dispatch(addProductActions.init())
    }, [])
    return (<>
        <div className="list">
            {products.map((item) => (<CardProduct {...item} />))}
        </div>
        <Pagination />
    </>)
}