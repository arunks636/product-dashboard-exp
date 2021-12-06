import React from 'react'
import '../Styles/Sidebar.css'
import Logo from '../images/logo.svg'
import UserImg from '../images/user.svg'
import GridImg from '../images/grid.svg'
import CheckImg from '../images/check.svg'
import InfoImg from '../images/info.svg'
function Sidebar() {
    return (
        <div className="sideBar">
           <a href="/"><img src={Logo}/></a>
           <ul>
               <li><a href="#"><img src={UserImg}/></a></li>
               <li><a href="#" className="active"><img src={GridImg}/></a></li>
               <li><a href="#"><img src={CheckImg}/></a></li>
               <li><a href="#"><img src={InfoImg}/></a></li>
           </ul>
        </div>
    )
}

export default Sidebar
