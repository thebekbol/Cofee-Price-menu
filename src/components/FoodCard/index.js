import React from 'react';
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import SectionsCard from "./SectionsCard";
import styled from "styled-components";
const StyledMenu = styled.nav`
  .food-card--menu{
    overflow: auto;
    height: 80vh;
    width: 26%;
    border: 1px solid #5E2802;
    padding: 15px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    //margin-right: 50px;

    .active {
      background: ${(darkMode) => (darkMode ? "#F5E9E1" : "#5E2802")};
      color: ${(darkMode) => (darkMode ? "#5E2802" : "#F5E9E1")};
    }
    
    &--item {
      width: 100%;
      font-family: "Montserrat", sans-serif;
      padding: 0 15px;
      border-radius: 5px;
      font-size: 24px;
      color: ${(darkMode) => (darkMode ? "#F5E9E1" : "#5E2802")};
      margin: 10px 0;
    }

    &--linea {
      height: 0.5px;
      background: #5E2802;
    }
  }`;

const FoodCard = () => {
    const {foods, darkMode} = useSelector(s => s)
    const {nameId} = useParams()
    const food = foods.find(el => el.name === nameId)
    return (
        <section className="p-4 pt-24">
            <div className="container">
                <StyledMenu className="food-card flex justify-between">
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
                </StyledMenu>
            </div>
        </section>
    );
};

export default FoodCard;