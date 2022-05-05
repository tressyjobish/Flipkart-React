import React from "react";
import { galaxy12 } from "../assets/Images";
import "../Styles/PopularMobiles.css";
import CardItems from "./Constants/Popularity";
import Card from "./Card";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { assurlogo } from "../assets/Images/index";
import { mobiles } from "./Constants/Popularity";
function PopularMobiles({ cardData }) {
  return (
    <div className="mobile-left">
      <div className="popular">
        <div className="mobile-respos">
          <div className="mobile-popiular">
            <img src={cardData.imgsrc} alt="" />

            <div className="poco-media">
              <div className="poco">{cardData.heading}</div>
              <div className="s">
                <div>
                  <span className="four-star">
                    4.4
                    <AiFillStar />{" "}
                  </span>{" "}
                </div>
                <div className="ratings">
                  <span>45,001 Ratings & 2,541 Reviews</span>
                </div>
              </div>

              <div className="rate-mob">{cardData.price}</div>

              <div className="gb-ram">
                <ul>
                  <li className="li">4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                  <li>6.59 cm (6.53 inch)HD + Display</li>
                  <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                  <li>64MP + 12MP + 5MP + 5MP|32MP Front Camera</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="most-mobile">
            <div className="mobile-media">
              <div className="mobile-most">
                <div className="most">
                  {" "}
                  <h3 className="most-helpful">Most helpful Review</h3>
                </div>

                <div className="fabulous">
                  <div className="most-col">
                    <span>
                      1
                      <AiFillStar />{" "}
                    </span>{" "}
                  </div>
                  <div className="col-most">
                    <span className="">{cardData.headingb}</span>
                  </div>
                </div>
                <div className="fabulous-sentence">
                  <p>
                    I'm completely satisfied with the products.it is my first<br></br>Samsung phone and bought only for
                    talking purpose.I have<br></br>
                    selected golden colour and it's looks like
                  </p>
                </div>
                <div className="read">
                  <span>Read full review</span>
                </div>
                <div className="name">
                  <p>Mithun Sharma</p>
                  <span>
                    <TiTick className="tick" />
                  </span>
                  <p>Certified Buyer 7months ago</p>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-content">
                <h3>Recent Review</h3>
              </div>
              <div className="start-rate">
                <div className="review-rating">
                  <span>
                    1
                    <AiFillStar />{" "}
                  </span>{" "}
                </div>
                <div className="terrible-product">
                  <span className="">Terrrible product</span>
                </div>
              </div>
              <div className="very-poor">
                <p>Very poor camera quality looks like vga came</p>
                <div className="name-rating">
                  <p>Mithun Sharma</p>
                  <span>
                    <TiTick className="tick" />
                  </span>
                  <p>Certified Buyer 7months ago</p>
                </div>
              </div>
            </div>

            {/* <div>
                      <h3>Recent Review</h3>
                  </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMobiles;
