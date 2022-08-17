import React from 'react';
import logo from "../../img/pngwing 1.svg";
import bell from "../../img/Bell.svg";
import language from "../../img/globus.svg";
import {Link} from "react-router-dom";
import Basket from "../Basket";
import {changeTheme} from "../../redux/ActionCreators";
import {useDispatch, useSelector} from "react-redux";
import {FaConciergeBell} from "react-icons/fa";
import {VscGlobe} from "react-icons/vsc";
import {SiCoffeescript} from "react-icons/si";


const Header = () => {

    const dispatch = useDispatch()
    const {darkMode} = useSelector(s => s)
    return (
       <div style={{
           background: darkMode? "#1B0A06" : "#F5E9E1"
       }}>
           <div className="container">
               <div className="header flex items-end justify-between" style={{
                   background: darkMode? "#1B0A06" : "white",
                   color: darkMode? "#F5E9E1" : "#5E2802"
               }}>
                   <Link to="/">
                       <div className="header--logo flex items-end">
                           <SiCoffeescript className="text-5xl mx-2"/>
                           <h1 className="text-logo font-bold text-3xl">Coffee Place</h1>
                       </div>
                   </Link>
                   <input  placeholder="search" className="header--search mx-3" type="text" style={{
                       background: darkMode? "#1B0A06" : "",
                       border: darkMode? "1px solid #F5E9E1" : ""
                   }}/>
                   <div className="header--items flex items-center pt-4">
                       <FaConciergeBell className="mx-3 text-4xl cursor-pointer"/>
                       <Basket/>
                       <div style={{
                           background: "linear-gradient(#ffffff 50%, #000000 50%)",
                           border: darkMode? "2px solid #F5E9E1" : "",
                       }}   className="header--items--dark-mode-btn mx-3 cursor-pointer"
                            onClick={() => dispatch(changeTheme())}
                       ></div>
                       <div className="header--items--language-btn ml-3 cursor-pointer" style={{
                           border: darkMode? "2px solid #F5E9E1" : "",
                           color: darkMode? "#F5E9E1" : "#5E2802"
                       }}>
                           <VscGlobe className="globe"/>
                           <h3 className="font-bold">En</h3>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default Header;