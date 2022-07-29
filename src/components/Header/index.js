import React from 'react';
import logo from "../../img/pngwing 1.svg"
import bell from "../../img/Bell.svg"
import basket from "../../img/basket.svg"
import language from "../../img/globus.svg"


const Header = () => {
    return (
        <div className="container">
           <div className="header flex py-2 items-end justify-between">
               <div className="header--logo flex items-end">
                   <img src={logo} alt=""/>
                   <h1 className="text-logo font-bold text-3xl">Coffee Place</h1>
               </div>
                   <input placeholder="search" className="header--search mx-3" type="text"/>
               <div className="header--items flex items-center pt-4">
                   <img className="mx-3" src={bell} alt=""/>
                   <img className="mx-3" src={basket} alt=""/>
                   <div style={{
                       background: "linear-gradient(#ffffff 50%, #000000 50%)"
                   }}   className="header--items--dark-mode-btn mx-3"></div>
                   <div className="header--items--language-btn ml-3">
                       <img className="globe" src={language} alt=""/>
                       <h3 className="font-bold">En</h3>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Header;