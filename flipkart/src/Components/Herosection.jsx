import React, { useState } from "react";
import "../Styles/Herosection.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import CardItems from "./Constants/Popularity";
import Card from "../Components/Card";

function Herosection() {
  const [activeButton, setActiveButton] = useState("a");
  const handleDropdownClick = (name) => {
    if (activeButton === name) {
      setActiveButton("");
    } else {
      setActiveButton(name);
    }
  };
  return (
    <div className="hero-top">
      <div className="home">
        <div className="home-mobile">
          <div className="home-1">
            {" "}
            <a className="home-2" href="">
              Home
            </a>
            <MdKeyboardArrowRight />
          </div>

          <div className="home-1">
            <a className="home-2" href="">
              Mobiles & Ac ....
            </a>
            <MdKeyboardArrowRight />
          </div>
          <div className="home-1">
            <a className="home-2" href="">
              Mobiles
            </a>
          </div>
        </div>
        <div className="mobile-products">
          <div className="prod-mob">
            <div className="mobile-dispaly">
              <h3>Mobiles</h3>
              <span>(showing 1 -24 products of 8095 products)</span>
            </div>
          </div>
        </div>
        <div className="sort-by">
          <span>Sort By</span>
          <div className="popularity">Relevance</div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("a")}>
              Popularity
            </button>
          </div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("e")}>
              Price-- Low to High
            </button>
          </div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("e")}>
              Price-- High to Low
            </button>
          </div>

          <div className="popularity">Newest First</div>
        </div>
      </div>
      <div className="card-container">
        {CardItems.map((CardItem, index) => {
          return <Card cardData={CardItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Herosection;
