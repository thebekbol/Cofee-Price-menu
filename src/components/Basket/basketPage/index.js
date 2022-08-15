import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {addToBasket, deleteFromBasket} from "../../../redux/ActionCreators";
import {RiDeleteBinLine} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";

const BasketPage = ({el}) => {

    const {basket} = useSelector(s => s)
    const dispatch = useDispatch()
    const resultPrice = basket.reduce((acc, el) => {
        console.log(el.price)
        return el.price.slice(0, -1) * el.quantity + acc
    }, 0)

    return (
        <tbody className="mb-4 flex items-start">
        <tr>
            <th scope="col" className="pr-6">
                <img src={el.img} width={80} alt=""/>
            </th>
            <th scope="col" className="  w-14 mr-2">
                <h1 className="mx-3">{el.title}</h1>
            </th>
            <th scope="col" className="px-6 cursor-pointer">
                                                    <span className="flex items-center mx-4">
                                                    <AiOutlineMinus/>
                                                        {el.quantity}
                                                        <AiOutlinePlus onClick={() => dispatch(addToBasket(el))}/>
                                                </span>
            </th>
            <th scope="col" className="px-6">
                <p className="mx-4">{resultPrice}</p>
            </th>
            <th scope="col" className="px-6">
                <RiDeleteBinLine className="cursor-pointer" onClick={() => dispatch(deleteFromBasket(el.id))}/>
            </th>
        </tr>
        </tbody>
    );
};

export default BasketPage;