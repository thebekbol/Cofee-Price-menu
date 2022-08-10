import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const FoodCard = () => {
    const {foods} = useSelector(s => s)
    return (
        <section className="p-4 pt-24">
            <div className="container">
                <div className="food-card flex">
                    <div className="food-card--menu p-5">
                            {
                                foods.map(el => (
                                   <>
                                       <NavLink to={`/menu/${el.name}`} className="food-card--menu--item">
                                           {el.name}
                                       </NavLink>
                                       <div className="w-full food-card--menu--linea"></div>
                                   </>
                                ))
                            }
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodCard;