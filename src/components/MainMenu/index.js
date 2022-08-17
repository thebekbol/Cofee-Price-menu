import React from 'react';
import MenuPage from "../MenuPage";
import {useSelector} from "react-redux";


const MainMenu = () => {
    const {foods} = useSelector(s => s)
    return (
       <section className="py-4 pt-20">
           <div className="main-menu container">
               <div className="flex flex-wrap flex-row justify-between">
                   {
                       foods.map(el => (
                           <MenuPage el={el} key={el.id}/>
                       ))
                   }
               </div>
           </div>
       </section>
    );
};

export default MainMenu;