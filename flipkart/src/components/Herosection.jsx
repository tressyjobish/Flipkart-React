import React from "react";
import "../Styles/Herosection.css";
import { mob1 } from "../assets/Images/index";
import { assurlogo } from "../assets/Images";

import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
// import {Accordion} from 'react-bootstrap-accordion'

function Herosection() {
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
          <div className="popularity">Popularity</div>
          <div className="popularity">Price-- Low to High</div>
          <div className="popularity">Price-- High to Low</div>
          <div className="popularity">Newest First</div>
        </div>
      </div>
      <div>
        <div>
          <div className="mob1">
            <div>
              <img src={mob1} alt="" />
              <div className="mob-checkbox">
                <label>
                  <input type="checkbox" className=""></input>
                </label>

                <label>
                  <span>Add to Compare</span>
                </label>
              </div>
            </div>
            <div className="mob-poco">
              <div className="pococ31">
                <div className="poco">POCO C31 (Royal Blue,64 GB)</div>
                <div className="media"> #JustHere</div>
                <div className="start-rate">
                  <div className="star-rating">
                    <span>
                      4.4
                      <AiFillStar />{" "}
                    </span>{" "}
                  </div>
                  <div className="media-image">
                    <span className="rating-no">(2,57417)</span>
                    <img src={assurlogo} alt="" className="media-imge" />
                  </div>
                  <div></div>

                  <div className="ratings">
                    <span>45,001 Ratings & 2,541 Reviews</span>
                  </div>
                </div>
                <div>
                  <div className="amt-media">
                    <span>₹11,499</span>
                    <span className="line-amt">12,999</span>
                    <span className="off-amt">11%off</span>
                  </div>
                  <div>
                    <span className="free-delivery">Free delivery</span>
                  </div>
                  <div>
                    <div className="upto-media">
                      <div>Upto</div>
                      <div>₹ 10,800</div>
                      <div>Off on Exchange</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="bank-offer">Bank Offer</h5>
                  </div>
                </div>
                <div className="gb-container">
                  <div className="div-1">4 GB RAM | 64 GB Storage</div>
                  <div className="div-display">
                    <div className="div-2">16.55 cm (6.515 inch) HD + Display</div>

                    <div className="div-22"> 6000 mAh</div>
                  </div>
                </div>
                <div className="gb-ul">
                  <ul>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>16.59 cm (6.53 inch)HD + Display</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                  </ul>
                </div>
              </div>
              <div className="poco-col">
                <div className="poco-col1">
                  <div className="poco-amt">
                    ₹9,499 <img src={assurlogo} alt="" className="ass-logo" />
                  </div>
                  <div className="poco-amount">
                    <div className="poco-amt2">₹ 11,999</div>
                    <div className="poco-amt3">
                      <span>20% off</span>
                    </div>
                  </div>
                  <div className="free">
                    <h3>Free delivery</h3>
                  </div>
                  <div className="upto">
                    <div>
                      <div className="upto-amt">
                        <div>upto</div>
                        <div>₹ 8,6650</div>
                        <div>Off on Exchange</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
