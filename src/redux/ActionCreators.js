import {ADD_TO_BASKET, DELETE_ALL_BASKET, DELETE_FROM_BASKET} from "./ActionTypes";

export const addToBasket = (el) => {
    return {type: ADD_TO_BASKET, payload: el}
}

export const deleteAllBasket = () => {
    return {type: DELETE_ALL_BASKET}
}

export const deleteFromBasket = (id) => {
    return {type: DELETE_FROM_BASKET, payload: id}
}