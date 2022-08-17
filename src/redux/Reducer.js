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
import {ADD_TO_BASKET, CHANGE_THEME, DELETE_ALL_BASKET, DELETE_FROM_BASKET} from "./ActionTypes";
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
                    id: 101,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 102,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 103,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 104,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 105,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 106,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 107,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_1,
                    price: "150c"
                },
                {
                    id: 108,
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
                    id: 201,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 202,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 203,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 204,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 205,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_2,
                    price: "150c"
                },
                {
                    id: 206,
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
                    id: 301,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 302,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 303,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 304,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 305,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 306,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 307,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_3,
                    price: "150c"
                },
                {
                    id: 308,
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
                    id: 401,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 402,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 403,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 404,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 405,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 406,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 407,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_4,
                    price: "150c"
                },
                {
                    id: 408,
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
                    id: 501,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 502,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 503,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 504,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 505,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 506,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 507,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_5,
                    price: "150c"
                },
                {
                    id: 508,
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
                    id: 601,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 602,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 603,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 604,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 605,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_6,
                    price: "150c"
                },
                {
                    id: 606,
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
                    id: 701,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 702,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 703,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 704,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 705,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 706,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 707,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_7,
                    price: "150c"
                },
                {
                    id: 708,
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
                    id: 801,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 802,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 803,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 804,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 805,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 806,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 807,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_8,
                    price: "150c"
                },
                {
                    id: 808,
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
                    id: 901,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 902,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 903,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 904,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 905,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 906,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 907,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_9,
                    price: "150c"
                },
                {
                    id: 908,
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
                    id: 1001,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 1002,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 1003,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_10,
                    price: "150c"
                },
                {
                    id: 1004,
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
                    id: 1101,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1102,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1103,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1104,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1105,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1106,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1107,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_11,
                    price: "150c"
                },
                {
                    id: 1108,
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
                    id: 1201,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1202,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1203,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1204,
                    title: "Double americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1205,
                    title: "Double cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1206,
                    title: "Latte",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1207,
                    title: "Americano",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
                {
                    id: 1208,
                    title: "Cappuccino",
                    size: "220ml",
                    img: foods_image_12,
                    price: "150c"
                },
            ],
        },
    ],
    basket: [],
    darkMode: JSON.parse(localStorage.getItem("mode")) || false
}



export const Reducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_TO_BASKET: {
            const findProduct = state.basket.find(el => el.id === action.payload.id)
            if (findProduct){
                return {...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1}: el)}
            }else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        }
        case DELETE_ALL_BASKET: {
            return {...state, basket: []}
        }

        case DELETE_FROM_BASKET: {
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        }
        case CHANGE_THEME: {
            return {...state, darkMode: action.payload}
        }


        default:
            return state
    }
}