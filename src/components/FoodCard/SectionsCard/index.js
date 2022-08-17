import React from 'react';
import {BsFillBasket2Fill} from "react-icons/bs";
import {addToBasket} from "../../../redux/ActionCreators";
import {FaCheck} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";

const SectionsCard = ({element}) => {
    const {basket, darkMode} = useSelector(s => s)
    const dispatch =  useDispatch()
    let inBasket = basket.some(el => el.id === element.id)
    return (
        <div className="food-card--foods--box" style={{
            background: darkMode? "#150000" : "#F5E9E1",
            color: darkMode? "#F5E9E1" : "#5E2802",
            border: darkMode? "1px solid #F5E9E1" : ""
        }}>
            <img src={element.img} alt=""/>
            <h1>{element.title}</h1>
            <p>{element.size}</p>
            <div>
                <h3>{element.price}</h3>
                <div onClick={() => dispatch(addToBasket(element))} className="basket-icon"
                >{ inBasket ? <FaCheck/> : <BsFillBasket2Fill/> }</div>
            </div>
        </div>
    );
};

export default SectionsCard;