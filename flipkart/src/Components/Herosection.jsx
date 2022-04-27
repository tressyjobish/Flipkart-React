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
    <div className="main-container">
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
      <div className="colum-number">
      <div className="number">
        <div> <span className="number-pages">Page 1 of 32</span></div>
        <div className="row-number">
        <a className="figure-a" href="">1</a>
        <a className="figure-b" href="">2</a>
        <a className="figure-b" href="">3</a>
        <a className="figure-b" href="">4</a>
        <a className="figure-b" href="">5</a>
        <a className="figure-b" href="">6</a>
        <a className="figure-b" href="">7</a>
        <a className="figure-b" href="">8</a>
        <a className="figure-b" href="">9</a>
        <a className="figure-b" href="">10</a>
        <a className="figure-c" href="">NEXT</a>

      </div>
        </div>
        </div>
        <div className="yes-no">
          <div className="data-yes">
           <div> <span>Did you find what you were looking for ?</span></div>
            <div className="option">
              <span className="option-yes">Yes</span>
              <span className="option-no">No</span>
            </div>
          </div>

        </div>
      
    </div>
  );
}

export default Herosection;
