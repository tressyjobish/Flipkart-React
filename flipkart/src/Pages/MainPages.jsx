import React, { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import MainLeft from "../Components/MainLeft";
import Herosection from "../Components/Herosection";
import PopularMobiles from "../Components/PopularMobiles";
import "../Styles/main.css";

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

         <PopularMobiles/>
         
      </div>
    </div>
  );
}

export default MainPages;
