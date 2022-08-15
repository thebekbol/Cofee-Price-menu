import foods_image_1 from "../img/menu-img-1.svg";
import foods_image_2 from "../img/menu-img-2.svg";
import foods_image_3 from "../img/menu-img-3.svg";
import foods_image_4 from "../img/menu-img-4.svg";
import foods_image_5 from "../img/menu-img-5.svg";
import foods_image_6 from "../img/menu-img-6.png";
import foods_image_7 from "../img/menu-img-7.svg";
import foods_image_8 from "../img/menu-img-8.svg";
import foods_image_9 from "../img/menu-img-9.svg";
import foods_image_10 from "../img/menu-img-10.svg";
import foods_image_11 from "../img/menu-img-11.svg";
import foods_image_12 from "../img/menu-img-12.svg";
import {ADD_TO_BASKET, DELETE_ALL_BASKET, DELETE_FROM_BASKET} from "./ActionTypes";
import basket from "../components/Basket";


const initialState = {
    foods: [
        {
            id: 1,
            name: "Coffee",
            subTitle: "Coffee, Ice coffee, Espresso, Frappe",
            image: foods_image_1,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
            ],

        },
        {
            id: 2,
            name: "Beverages",
            subTitle: "Juice, Cold drinks, Cocktails, Smoothies, Limonade",
            image: foods_image_2,
            sections: [
                {
                    id: 1,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
            ],
        },
        {
            id: 3,
            name: "Tea",
            subTitle: "Tea, Ice tea",
            image: foods_image_3,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
            ],
        },
        {
            id: 4,
            name: "Breakfast",
            subTitle: "Breakfasts, Porridge, Omlette",
            image: foods_image_4,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
            ],
        },
        {
            id: 5,
            name: "Soups",
            subTitle: "Soups",
            image: foods_image_5,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
            ],
        },
        {
            id: 6,
            name: "Salads",
            subTitle: "Salads",
            image: foods_image_6,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
            ],
        },
        {
            id: 7,
            name: "Burgers",
            subTitle: "Burgers",
            image: foods_image_7,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
            ],
        },
        {
            id: 8,
            name: "Pizzas",
            subTitle: "Pizzas",
            image: foods_image_8,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
            ],
        },
        {
            id: 9,
            name: "Sandwiches",
            subTitle: "Sandwiches",
            image: foods_image_9,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
            ],
        },
        {
            id: 10,
            name: "Steak",
            subTitle: "Steaks",
            image: foods_image_10,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
            ],
        },
        {
            id: 11,
            name: "Snacks",
            subTitle: "Snacks",
            image: foods_image_11,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
            ],
        },
        {
            id: 12,
            name: "Desserts",
            subTitle: "Cakes",
            image: foods_image_12,
            sections: [
                {
                    id: 1,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 2,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 3,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 4,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 5,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 6,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 7,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 8,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
            ],
        },
    ],
    basket: [],
    darkMode: false
}



export const Reducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_TO_BASKET: {
            const findProduct = state.basket.find(el => el.id === action.payload.id)
            if (findProduct){
                return {...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1}: el)}
            }else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1, inBasket: true}]}
            }
        }
        case DELETE_ALL_BASKET: {
            return {...state, basket: []}
        }

        case DELETE_FROM_BASKET: {
            delete basket.inBasket
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        }


        default:
            return state
    }
}