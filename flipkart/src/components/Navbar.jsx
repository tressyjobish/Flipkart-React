import React from "react";
import { MdExpandMore } from "react-icons/md";
import Electronics from "./Electronics";

import "../Styles/Navbar.css"
function Navbar(){
    
    return(
        <div className="navbar">
            <div className="dropdown">
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