import React from 'react';
import logo from "../../img/pngwing 1.svg";
import bell from "../../img/Bell.svg";
import language from "../../img/globus.svg";
import {Link} from "react-router-dom";
import Basket from "../Basket";


const Header = () => {

    return (
        <div className="container">
           <div className="header flex items-end justify-between">
              <Link to="/">
                  <div className="header--logo flex items-end">
                      <img src={logo} alt=""/>
                      <h1 className="text-logo font-bold text-3xl">Coffee Place</h1>
                  </div>
              </Link>
                   <input placeholder="search" className="header--search mx-3" type="text"/>
               <div className="header--items flex items-center pt-4">
                   <img className="mx-3 cursor-pointer" src={bell} alt=""/>
                   <Basket/>
                   <div style={{
                       background: "linear-gradient(#ffffff 50%, #000000 50%)"
                   }}   className="header--items--dark-mode-btn mx-3 cursor-pointer"></div>
                   <div className="header--items--language-btn ml-3 cursor-pointer">
                       <img className="globe" src={language} alt=""/>
                       <h3 className="font-bold">En</h3>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Header;