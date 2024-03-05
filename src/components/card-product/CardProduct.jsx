import React from "react"

import "./CardProduct.scss"

export const CardProduct = ({ brand, price, product }) => (
    <div className="root">
        <h3 className="root__title">{product}</h3>
        <span className="root__price">{price}</span>
        {brand && <span className="root__brand">{brand}</span>}
    </div>
)