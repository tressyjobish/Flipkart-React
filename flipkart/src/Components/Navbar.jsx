import React from "react";
import { MdExpandMore } from "react-icons/md";
 import Electronics from "./Electronics";
import {sortup} from "../assets/Images/index";
import { sortdown } from "../assets/Images/index";

import "../Styles/Navbar.css"
function Navbar(){
    
    return(
        <div className="navbar">
            <div className="dropdown">
                <div className="dropdown-img"><img className="sort-img"src={sortup} alt=""/>
                <p className="sortup">Sort</p></div>
                <div className="dropdown-imgs"><img className="sort-imgs"src={sortdown} alt=""/>
                <p className="sortdown">Fliter</p></div>
                
               
            <span>Electronics</span><MdExpandMore className="dropdown-expand"/>
            <span>TVs & Appliance</span><MdExpandMore className="dropdown-expand"/>
            <span>Men</span><MdExpandMore className="dropdown-expand"/>
            <span>Women</span><MdExpandMore className="dropdown-expand"/>
            <span>Baby & Kids</span><MdExpandMore className="dropdown-expand"/> 
            <span>Home & Furniture</span><MdExpandMore className="dropdown-expand"/>
            <span>Sports,Books & More</span><MdExpandMore className="dropdown-expand"/>
            <span>Flights</span>
            <span>OfferZone</span>
           </div>
           <Electronics/>  
        </div>
        
    )
}

export default Navbar;