import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainLeft from "../components/MainLeft";
import Herosection from "../components/Herosection";
// import Electronics from "../components/Electronics";
import "../Styles/main.css"


function MainPages(){
    return(
        <div>
            <Header/>
        
        <Navbar/>
        <div className="main">
            <MainLeft />
        <Herosection/>
        </div>
        
        </div>
        

    )
}

export default MainPages;