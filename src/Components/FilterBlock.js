import React from 'react'
import FilterBody from '../Components/FilterBody'
import '../Styles/FilterBlock.css'

function FilterBlock() {
    const [filterShow, setFilterShow] = React.useState(false);
    const clickShowFilter = () => {
        setFilterShow(!filterShow);
    }
    return (
        <>
            <div className="filter-block">
                <div className="tag-wrap">
                    <p>Filters based on your profile</p>
                    <ul>
                        <li>Size <a className="close"></a></li>
                        <li>Color <a className="close"></a></li>
                        <li>Nike <a className="close"></a></li>
                        <li>Casual <a className="close"></a></li>
                        <li>Footwear <a className="close"></a></li>
                    </ul>
                </div>
                <div className="filter-btn-wrap">
                    <a className="clear-all">Clear all</a>
                    <a className="filter-btn" onClick={clickShowFilter}>Filters</a>
                </div>
            </div>
            {filterShow ? <FilterBody onCloseClick={clickShowFilter}/> : <></>}
        </>
       
    )
    
}

export default FilterBlock
