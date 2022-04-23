import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { assurlogo } from "../assets/Images";

import "../Styles/Card.css";

function Card({ cardData }) {
  return (
    <div className="wrappermob">
      <div className="mob1">
        <img src={cardData.imgsrc} alt="" />

        <div className="mob-poco">
          <div className="pococ31">
            <div className="poco">{cardData.heading}</div>
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
                <span>{cardData.rate}</span>
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

            <div className="gb-ul">
              <ul>
                <li className="li">4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
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
                ₹11,499 <img src={assurlogo} alt="" className="ass-logo" />
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
      <div className="mob-checkbox">
        <label>
          <input type="checkbox" className=""></input>
        </label>

        <label>
          <span>Add to Compare</span>
        </label>
      </div>
      <div className="gb-container">
        <div className="div-1">4 GB RAM | 64 GB Storage</div>
        <div className="div-display">
          <div className="div-2">16.55 cm (6.515 inch) HD + Display</div>

          <div className="div-22"> 6000 mAh</div>
        </div>
        <div className="div-row">
          <div className="div-3">48MP + 5MP + 2MP</div> <div className="div-33">8MP Front Camera</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
