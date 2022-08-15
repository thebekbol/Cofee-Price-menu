import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const MenuPage = ({el}) => {
    const {name, subTitle, image} = el

    return (
           <div className="5 m-4 boxes">
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