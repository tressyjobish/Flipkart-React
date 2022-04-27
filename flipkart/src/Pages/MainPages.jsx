import React, { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import MainLeft from "../Components/MainLeft";
import Herosection from "../Components/Herosection";
import PopularMobiles from "../Components/PopularMobiles";
import PriceLow from "../Components/PriceLow ";
import Footer from "../Components/Footer";
import "../Styles/main.css";
import { mobiles } from "../Components/Constants/Popularity";

function MainPages() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <Header />
     

      <Navbar />
     
      
      <div className="main">
        <MainLeft selected={selected} setSelected={setSelected} />
       
        <Herosection />
      </div>
      <div>
      <div className="popular-mobiles">
          <h2 className="review">Reviews for Popular Mobiles</h2>
        </div>
      {mobiles.map((v) => {
        return (
          <PopularMobiles cardData={v}/>
        );
      })}
         
         
      </div>
      
      <Footer/>
    </div>
  );
}

export default MainPages;
