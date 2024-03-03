import React from "react"
export const CardProduct = ({ brand, price, product }) => (
    <div>
        <h3>{product}</h3>
        <span>{price}</span>
        {brand && <span>{brand}</span>}
    </div>
)