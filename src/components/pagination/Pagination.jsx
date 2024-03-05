import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductActions } from "../../store/slices/addProductSlice"
import { LIMIT } from "../../config/constants"

import "./Pagination.scss"

export const Pagination = () => {
    const dispatch = useDispatch()
    const offset = useSelector((s) => s.product.offset);

    const page = (offset / LIMIT) + 1;

    const onClickBtn = (num) => {
        dispatch(addProductActions.setOffset(num))
    }

    return (
        <div className="pagination">
            {page !== 1 && <button onClick={() => onClickBtn(offset - LIMIT)}>{"<"}</button>}
            <button>{page}</button>
            <button onClick={() => onClickBtn(offset + LIMIT)}>{">"}</button>
       </div>
    )
}
