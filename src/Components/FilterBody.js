import React from 'react'
import '../Styles/FilterBody.css'


function FilterBody({onCloseClick}) {
    return (
        <div className="filter-body-wrap">
            <div className="filter-body">
                <a href="#" onClick={onCloseClick} className="closeFilter"></a>
                <h2>Filters</h2>
                <div className="filter-content-block-wrap">
                    <div className="filter-content-block">
                        <label className="filter-check-box">
                            Men
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Women
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Boys
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Girls
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="filter-content-block">
                        <h4>Price</h4>
                        <label className="filter-check-box">
                            Rs. 1997 to Rs. 6172 <sub>(106)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Rs. 10347 to Rs. 14522 <sub>(14)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Rs. 6172 to Rs. 10347 <sub>(16)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Rs. 14522 to Rs. 18697 <sub>(5)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Rs. 10347 to Rs. 14522 <sub>(14)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Rs. 14522 to Rs. 18697 <sub>(5)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="filter-content-block">
                        <h4>Categories</h4>
                        <label className="filter-check-box">
                            Tshirts <sub>(106)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Track Pants <sub>(14)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Sports Shoes <sub>(16)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Tights <sub>(5)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Casual Shoes <sub>(14)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            Sweatshirts <sub>(5)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <a href="#" className="more-filter">+ 18 more</a>
                    </div>

                    <div className="filter-content-block color-block">
                        <h4>Color</h4>
                        <label className="filter-check-box">
                            <sup className="black"></sup>Black <sub>(106)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            <sup className="white"></sup>White <sub>(156)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            <sup className="blue"></sup>Blue <sub>(174)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="filter-check-box">
                            <sup className="pink"></sup>Pink <sub>(5)</sub>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>

                <div className="button-wrap">
                    <a href="#" className="button-wrap-btn clear-all-btn">Clear all</a>
                    <a href="#" className="button-wrap-btn apply-btn">Apply</a>
                </div>
            </div>
        </div>
    )
}

export default FilterBody
