import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {addToBasket, deleteFromBasket} from "../../../redux/ActionCreators";
import {RiDeleteBinLine} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";

const BasketPage = ({el}) => {

    const {darkMode} = useSelector(s => s)
    const dispatch = useDispatch()

    return (
        <tbody className="mb-4 flex items-start">
        <tr>
            <td className="pr-6">
                <img src={el.img} width={80} alt=""/>
            </td>
            <td className="  w-14 mr-2">
                <h1 className="mx-3">{el.title}</h1>
            </td>
            <td className="px-6 w-10">
                                                    <span className="quantity-span flex items-center mx-4">
                                                    <AiOutlineMinus className="cursor-pointer"/>
                                                        <p className="mx-2">{el.quantity}</p>
                                                        <AiOutlinePlus onClick={() => dispatch(addToBasket(el))} className="cursor-pointer"/>
                                                </span>
            </td>
            <td className="px-6 w-8">
                <p className="mx-4">{el.price.slice(0, -1) * el.quantity}som</p>
            </td>
            <td className="px-6 w-8">
                <RiDeleteBinLine className="cursor-pointer" onClick={() => dispatch(deleteFromBasket(el.id))}/>
            </td>
        </tr>
        </tbody>
    );
};

export default BasketPage;