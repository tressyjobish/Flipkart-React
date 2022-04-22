import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { assurlogo } from "../assets/Images";

import "../Styles/MainLeft.css";
function MainLeft() {
  const [isActive, setIsActive] = useState("brand");

   const handleDropdownClick = (e) => {
    setIsActive(e.target.value);
   };

  return (
    <div className="main-left">
      <section className="main-section">
        <div className="main-sectionfliter">
          <span className="fliter">Fliters</span>
        </div>
        )
        <div className="main-right">
          <span>CLEAR ALL</span>
        </div>
        <div className="fliter-content">
          <div className="fliter-info">
            <div className="fliter-sign">x</div>
            <div class="fliter-amt">Min-₹50000+</div>
          </div>
          <div className="fliter-info">
            <div className="fliter-sign">x</div>
            <div class="fliter-amt">SAMSUNG</div>
          </div>
        </div>
        <div>
          <div className="cate">
            <section className="category-mobile">
              <div className="category">
                <span>CATEGORIES</span>
              </div>
              <span>
                <MdKeyboardArrowLeft />
              </span>
              <a href="" className="mobiles-Accessory">
                Mobiles & Accessories
              </a>
              <h3 className="cate-mob">Mobiles</h3>
            </section>
          </div>
          </div>
      </section>
          {/* <section className="price-section"> */}
          <div className="price">
            <div>
              <span className="price">PRICE</span>
            </div>
          </div>
          <div>
            <div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
              <div className="map"></div>
            </div>
          </div>
          <div>
            <div>
              <div className="map-search"></div>
            </div>
            <select className="min">
              <option value="volvo">MIN</option>
              <option value="volvo">₹ 2000</option>
              <option value="volvo">₹ 4000</option>
              <option value="volvo">₹ 7000</option>
              <option value="volvo">₹ 9000</option>
              <option value="volvo">₹ 12000</option>
              <option value="volvo">₹ 14000</option>
              <option value="volvo">₹ 20000</option>
            </select>
            <span className="to">to</span>
            <select className="rs">
              <option value="volvo">₹ 50000</option>
              <option value="volvo">₹ 80000</option>
              <option value="volvo">₹ 10000</option>
              <option value="volvo">₹ 12000</option>
              <option value="volvo">₹ 10000</option>
              <option value="volvo">₹ 50000</option>
              <option value="volvo">₹ 50000</option>
            </select>
          </div>

          {/*  */}
          

          <div className="brandsection" onClick={() => setIsActive(!isActive)}>
            <h3 className="brand">BRAND</h3>
            {isActive ? <IoIosArrowUp className="arrowdown" /> : <IoIosArrowDown className="arrowdown" />}
          </div>

          {isActive && (
            <div className="accordion-content">
              {
                <ul>
                  <li>x Clear all </li>
                  <li>Search Brand</li>
                </ul>
              }
            </div>
          )}
       
      <div>
        <div>
          <div className="brandsection" onClick={() => setIsActive(!isActive)}>
            <h3 className="brand">CUSTOMER RATING</h3>
            {isActive ? <IoIosArrowUp className="arrowdown" /> : <IoIosArrowDown className="arrowdown" />}
          </div>
          {isActive && (
            <div className="accordion">
              {
                <ul>
                  <li>
                    <div className="star-above">
                      <label>
                        <input type="checkbox"></input>
                        <div className="four-star">4★ &amp; above</div>
                      </label>
                    </div>{" "}
                  </li>
                  <li>Search Brand</li>
                </ul>
              }
            </div>
          )}
        </div>
      </div>
      <section className="assure-checkbox">
        <label>
          <input type="checkbox"></input>
        </label>
        <img src={assurlogo} alt="" className="assurlogo" />
        <div className="question">
          <span> ? </span>
        </div>
      </section>
      <div>
        <div className="brandsection">
          <h3 className="brand">GST INVOICE AVAILABLE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>

      <div>
        <div className="brandsection">
          <h3 className="brand">RAM</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">INTERNAL STORAGE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">BATTERY CAPACITY</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">SCREEN SIZE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">PRIMARY CAMERA</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">SECONDARY CAMERA</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">PROCESSOR BRAND</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">SPECIALITY</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">RESOLUTION TYPE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">OPERATING SYSTEM</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">NETWORK TYPE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">SIM TYPE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">OFFERS</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">BUDGET</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">FEATURES</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand"> TYPE</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">NUMBER OF CORES</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">AVAILABILITY</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">DISCOUNT</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">OPERATING SYSTEM VERSION NAME</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
      <div>
        <div className="brandsection">
          <h3 className="brand">CLOCK SPEED</h3>
          <IoIosArrowDown className="arrowdown" />
        </div>
      </div>
    </div>
    // </section>
    // </div>
  );
}

export default MainLeft;
