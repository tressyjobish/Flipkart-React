import React from "react";
import {MdKeyboardArrowLeft,MdExpandLess} from "react-icons/md"

import "../Styles/MainLeft.css"
function MainLeft(){
    return(
        <div className="main-left">
            <section className="main-section">
                <div className="main-sectionfliter">
                    <span>Fliters</span></div>
            
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
                <div className="category"><span>CATEGORIES</span></div>
                <span><MdKeyboardArrowLeft/></span>
                <a href="" className="mobiles-Accessory">Mobiles & Accessories</a>
                <h3 className="cate-mob">Mobiles</h3>
                
                

            </section>

        </div> 
        <section className="price-section">
        <div className="price">
            <div><span>PRICE</span></div>

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
                <div className="map-search">


                </div>


            </div>
        </div>
        <div>
            <div>
                <h3 className="brand">BRAND</h3><MdExpandLess className="exandless"/>
            </div>
        </div>
        </section>
        
        </div> 
        
        </section>
     
        
        </div>
        
    )
}

export default MainLeft;