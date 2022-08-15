import React from 'react';
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import SectionsCard from "./SectionsCard";

const FoodCard = () => {
    const {foods} = useSelector(s => s)
    const {nameId} = useParams()
    const food = foods.find(el => el.name === nameId)
    return (
        <section className="p-4 pt-24">
            <div className="container">
                <div className="food-card flex justify-between">
                    <div className="food-card--menu p-5">
                            {
                                foods.map(el => (
                                   <div className="flex">
                                       <NavLink to={`/menu/${el.name}`} className="food-card--menu--item">
                                           {el.name}
                                       </NavLink>
                                   </div>
                                ))
                            }
                    </div>
                    <div className="flex flex-wrap flex-row food-card--foods">
                        {
                            food.sections.map(element => (
                                <SectionsCard element={element} key={element.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodCard;