import React from 'react'
import '../Styles/ProductList.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import data from '../Components/product.json'


function ProductList(){
    const  newdata = data.map( ( data) =>{
        return (  
            <div className="single-product" key= {data.id}>
                <div className="product-inner-wrap">
                    <img className="product-img" src={data.img}/>              
                    <h2 className="product-title">{ data.name}</h2>
                    <p className="product-descr">{data.desc}</p>
                    <p className="product-rate">{data.rate}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                    <a href="#" className="like-product">
                        {/* Adding svg directly since I had to change the color on hover via css*/}
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6596 1.67794C17.1408 2.22368 17.5034 2.8674 17.7237 3.56672C17.9614 4.29783 18.0472 5.07162 17.9754 5.83856C17.9037 6.60549 17.6761 7.34867 17.3072 8.02052C16.0193 10.3407 13.4307 12.9341 9.61077 15.7273C9.43638 15.8546 9.22742 15.9231 9.0131 15.9231C8.79879 15.9231 8.58982 15.8546 8.41543 15.7273C4.57748 12.9289 1.98886 10.3354 0.703545 8.01789C0.330704 7.34528 0.0998752 6.60028 0.0259348 5.83091C-0.0480057 5.06154 0.0365832 4.28487 0.27425 3.55095C0.495628 2.85381 0.858826 2.21245 1.33998 1.669C1.82113 1.12556 2.40934 0.692345 3.06595 0.397824C4.57234 -0.280099 6.13271 -0.090911 7.57741 0.960132C8.10919 1.35023 8.58732 1.81155 8.99896 2.33174C9.41061 1.81155 9.88873 1.35023 10.4205 0.960132C11.8678 -0.0856558 13.4256 -0.277472 14.932 0.400451C15.5896 0.696822 16.1784 1.1322 16.6596 1.67794Z" fill="#FBFCFE"/>
                        </svg>
                    </a>
                </div>
            </div>
        )
      }
    )
    
    return (
        <div className="product-card">
            <ResponsiveMasonry   columnsCountBreakPoints={{480: 1,550: 2, 768: 4}}>
                <Masonry>
                    {newdata}
                </Masonry>         
            </ResponsiveMasonry>
        </div>   
               
    )
}

export default ProductList

