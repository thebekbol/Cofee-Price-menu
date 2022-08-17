import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

const MenuPage = ({el}) => {
    const {name, subTitle, image} = el
    const {darkMode} = useSelector(s => s)
    return (
           <div className="5 m-4 boxes" style={{
               background: darkMode? "#150000" : "#F5E9E1",
               color: darkMode? "#F5E9E1" : "#5E2802",
               border: darkMode? "1px solid #F5E9E1" : ""
           }}>
               <Link to={`/menu/${name}`}>
               <img src={image} alt="" className="boxes--img"/>
               <div className="boxes--titles">
                   <h1 className="boxes--titles--name">{name}</h1>
                   <p className="text-xs boxes--titles--subtitle">{subTitle}</p>
               </div>
               </Link>
           </div>
    );
};

export default MenuPage;