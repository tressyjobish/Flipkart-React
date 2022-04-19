import React from "react";
import "../Styles/Herosection.css"
import {mob1} from "../assets/Images/index";
import { assurlogo } from "../assets/Images";

import {MdKeyboardArrowRight} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";

function Herosection(){
    return(
        <div className="hero-top">
            < div className="home">
                <div className="home-mobile">
                 <div className="home-1"> <a className="home-2" href="">Home</a><MdKeyboardArrowRight/></div>   
               
               <div className="home-1"><a className="home-2" href="">Mobiles & Ac ....</a><MdKeyboardArrowRight/></div> 
               <div className="home-1"><a className="home-2" href="">Mobiles</a></div> 
                </div>
                <div className="mobile-products">
                    <div className="prod-mob">
                        <div className="mobile-dispaly">
                            <h3 >Mobiles</h3>
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
                                <img src={mob1} alt=""/>
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
                            <div className="start-rate">
                            <div className="star-rating">
                                <span>4.4<AiFillStar/> </span>
                            </div>
                            <div className="ratings">
                                <span>45,001 Ratings & 2,541 Reviews</span>
                                <div className="media"> #JustHere</div>
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
                                    <div className="poco-amt">₹9,499 <img src={assurlogo} alt=""className="ass-logo"/></div>
                                     <div className="poco-amount">
                                     <div className="poco-amt2">₹ 11,999</div>
                                     <div className="poco-amt3"><span>20% off</span></div></div>
                                     <div className="free"><h3>Free delivery</h3></div>
                                     <div className="upto">
                                         <div>
                                             <div className="upto-amt">
                                             <div>
                                                 upto 
                                             </div>
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
                    
                    
                    
            
           
        
    )
}

export default Herosection;