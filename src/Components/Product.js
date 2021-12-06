import React from 'react'
import ProductList from '../Components/ProductList'
import '../Styles/Product.css'


function Product() {
    return (
        <div className="product-wrap">
            <div className="tp-section">
                <h6>Showing 26 Product</h6>
                <div className="sort-wrap">
                    <select>
                        <option>newest to oldest</option>
                        <option>oldest to newest</option>
                        <option>price low to high</option>
                    </select>
                </div>
            </div>
            {/* List out products from json file */}
            <ProductList/>
            {/* List out products from json file */}
        </div>
    )
}

export default Product
