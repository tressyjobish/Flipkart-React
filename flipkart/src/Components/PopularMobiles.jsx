import React from "react";
import { galaxy12 } from "../assets/Images";
import "../Styles/PopularMobiles.css";
import CardItems from "./Constants/Popularity";
import Card from "../Components/Card";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import {TiTick} from "react-icons/ti";

function PopularMobiles(cardData){
    return(
        <div className="popular">
        <div className="popular-mobiles">
            
            <h2 className="review">Reviews for Popular Mobiles</h2>
            
            </div>
            <div className="mobile-respos">
            <div className="mobile-popiular">
                <img src={galaxy12} alt=""/>


            </div>
            <div>
            <div className="poco">SAMSUNG Galaxy F12 (Sea Green,64 GB)</div>
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
                  <div>₹10,799</div>
                  </div>
                  <div className="gb-ram">
                  <ul>
                    <li className="li">4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>16.59 cm (6.53 inch)HD + Display</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                    <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                   
                  </ul>
                  </div>
                  </div>
                  <div className="most-mobile">
                  <div className="">
                      <div className="mobile-most">
                      <div className="most"> <h3>Most helpful Review</h3></div>
<div className="fabulous">
                      <div className="most-col">5 <AiFillStar/></div>
                          <div className="col-most"><p className="fab">Fabulous</p>
                              </div></div>
                              <div className="fabulous-sentence">
                                  <p>I'm completely satisfied with the products.it is my first<br></br>Samsung phone and bought only for talking purpose.I have<br></br>
                                  selected golden colour and it's looks like</p>
                              </div>
                              <div className="read">
                                  <span>Read full review</span>
                              </div>
                              <div className="name"><p>Mithun Sharma</p><span><TiTick className="tick"/></span><p>Certified Buyer 7months ago</p></div>
                      </div>
                      </div>
                  </div>

                  {/* <div>
                      <h3>Recent Review</h3>
                  </div> */}
                  </div>
                </div>
            
            
    );        
}

export default PopularMobiles;