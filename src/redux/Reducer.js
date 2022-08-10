import foods_image_1 from "../img/menu-img-1.svg";
import foods_image_2 from "../img/menu-img-2.svg";
import foods_image_3 from "../img/menu-img-3.svg";
import foods_image_4 from "../img/menu-img-4.svg";
import foods_image_5 from "../img/menu-img-5.svg";
import foods_image_6 from "../img/menu-img-6.svg";
import foods_image_7 from "../img/menu-img-7.svg";
import foods_image_8 from "../img/menu-img-8.svg";
import foods_image_9 from "../img/menu-img-9.svg";
import foods_image_10 from "../img/menu-img-10.svg";
import foods_image_11 from "../img/menu-img-11.svg";
import foods_image_12 from "../img/menu-img-12.svg";


const initialState = {
    foods: [
        {
            id: 1,
            name: "Coffee",
            subTitle: "Coffee, Ice coffee, Espresso, Frappe",
            image: foods_image_1,
        },
        {
            id: 2,
            name: "Beverages",
            subTitle: "Juice, Cold drinks, Cocktails, Smoothies, Limonade",
            image: foods_image_2,
        },
        {
            id: 3,
            name: "Tea",
            subTitle: "Tea, Ice tea",
            image: foods_image_3,
        },
        {
            id: 4,
            name: "Breakfast",
            subTitle: "Breakfasts, Porridge, Omlette",
            image: foods_image_4,
        },
        {
            id: 5,
            name: "Soups",
            subTitle: "Soups",
            image: foods_image_5,
        },
        {
            id: 6,
            name: "Salads",
            subTitle: "Salads",
            image: foods_image_6,
        },
        {
            id: 7,
            name: "Burgers",
            subTitle: "Burgers",
            image: foods_image_7,
        },
        {
            id: 8,
            name: "Pizzas",
            subTitle: "Pizzas",
            image: foods_image_8,
        },
        {
            id: 9,
            name: "Sandwiches",
            subTitle: "Sandwiches",
            image: foods_image_9,
        },
        {
            id: 10,
            name: "Steak",
            subTitle: "Steaks",
            image: foods_image_10,
        },
        {
            id: 11,
            name: "Snacks",
            subTitle: "Snacks",
            image: foods_image_11,
        },
        {
            id: 12,
            name: "Desserts",
            subTitle: "Cakes",
            image: foods_image_12,
        },
    ],
    basket: [],
    darkMode: false
}



export const Reducer = (state = initialState, action) => {

    switch (action.type){




        default:
            return state
    }
}