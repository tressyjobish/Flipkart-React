import React, { useState } from "react";
import "../Styles/Herosection.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import CardItems from "./Constants/Popularity";
import Card from "../Components/Card";
import { useEffect } from "react";
import {moto} from "../assets/Images"

function Herosection() {
  let mobileList = CardItems;
  const [sortType, setSortType] = useState("byDefault");
  const handleDropdownClick = (sortType) => {
    setSortType(sortType);
  };

  useEffect(() => {
    if (sortType === "byDefault") {
      mobileList = CardItems.sort((a, b) => a.rate - b.rate);
      console.log("byDefault");
    } else if (sortType === "byPriceLow") {
      console.log("byPriceLow");
      mobileList = CardItems.sort((a, b) => a.rate - b.rate);
    } else if (sortType === "byPriceHigh") {
      console.log("byPriceHigh");
      mobileList = CardItems.sort((a, b) => a.rate - b.rate).reverse();
    } else if (sortType === "byName") {
      mobileList = CardItems.sort((a, b) => a.heading - b.heading);
    }
  }, [sortType]);

  return (
    <div className="main-container">
       <img src={moto} alt="" className="moto"/>
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
            
              <span>Showing 1 -24 of 751 results for "samsung mobiles"</span>
            </div>
          </div>
        </div>
        <div className="sort-by">
          <span>Sort By</span>
          <div className="popularity">Relevance</div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("byDefault")}>
              Popularity
            </button>
          </div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("byPriceLow")}>
              Price-- Low to High
            </button>
          </div>
          <div>
            <button className="pricelow" onClick={() => handleDropdownClick("byPriceHigh")}>
              Price-- High to Low
            </button>
          </div>

          <div className="popularity" onClick={() => handleDropdownClick("byName")}>
            Newest First
          </div>
        </div>
      </div>
      <div className="card-container">
        {mobileList.map((CardItem, index) => {
          return <Card cardData={CardItem} key={index} />;
        })}
      </div>
      <div className="colum-number">
        <div className="number">
          <div>
            {" "}
            <span className="number-pages">Page 1 of 32</span>
          </div>
          <div className="row-number">
            <a className="figure-a" href="">
              1
            </a>
            <a className="figure-b" href="">
              2
            </a>
            <a className="figure-b" href="">
              3
            </a>
            <a className="figure-b" href="">
              4
            </a>
            <a className="figure-b" href="">
              5
            </a>
            <a className="figure-b" href="">
              6
            </a>
            <a className="figure-b" href="">
              7
            </a>
            <a className="figure-b" href="">
              8
            </a>
            <a className="figure-b" href="">
              9
            </a>
            <a className="figure-b" href="">
              10
            </a>
            <a className="figure-c" href="">
              NEXT
            </a>
          </div>
        </div>
      </div>
      <div className="yes-no">
        <div className="data-yes">
          <div>
            {" "}
            <span>Did you find what you were looking for ?</span>
          </div>
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
