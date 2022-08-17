import React from 'react';
import basketLogo from "../../img/basket.svg";
import {useState} from "react";
import logo from "../../img/pngwing 1.svg"
import {useDispatch, useSelector} from "react-redux";
import {BsBasket2Fill, BsEmojiSmileUpsideDown} from "react-icons/bs";
import {deleteAllBasket} from "../../redux/ActionCreators";
import BasketPage from "./basketPage";

const Basket = () => {
    const [modal, setModal] = useState(false)
    const {basket} = useSelector(s => s)
    const dispatch = useDispatch()
    const resultPrice = basket.reduce((acc, el) => {
        console.log(el.price)
        return el.price.slice(0, -1) * el.quantity + acc
    }, 0)
    const {darkMode} = useSelector(s => s)
    return (
        <div>
            <div onClick={() => setModal(!modal)} className="header--items--basket-logo cursor-pointer">
                <BsBasket2Fill/>
                {
                    basket.length ? <div className="quantity" style={{
                        background: darkMode ? "white" : "",
                        color: darkMode? "#5E2802" :  "#F5E9E1",
                    }}>{basket.length}</div> : ""
                }
            </div>
            <div style={{
                display: modal ? "block" : "none"
            }} id="defaultModal" className="-1 fixed z-50 md:inset-0 h-modal md:h-full" aria-modal={true} role="dialog">
                <div className="relative modal-window rounded-lg shadow">
                    <div
                        className="modal-window--header flex justify-between items-center px-4 py-2 rounded-t border-b dark:border-gray-600">
                        <div className="modal-window--header--logo flex items-end">
                            <img src={logo} alt=""/>
                            <h1 className="text-logo font-bold text-3xl pb-1">Coffee Place</h1>
                        </div>
                        <button onClick={() => setModal(false)} type="button"
                                className="bg-transparent hover:bg-red-600 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-6 modal-window--products">
                        <div className="flex justify-between modal-window--products--titles">
                            <h2>Basket</h2>
                            <button onClick={() => dispatch(deleteAllBasket())}>Delete all</button>
                        </div>
                        <div className="modal-window--products--linea">
                            <table className={`overflow-y-auto ${basket.length === 0 ? "flex justify-center" : ""}`}>
                                {
                                    basket.length ?
                                        basket.map(el => (
                                            <BasketPage el={el}/>
                                        )) : <h1 className="mt-4 text-xl flex">Корзина пуста <BsEmojiSmileUpsideDown
                                            className="ml-2 mt-1"/></h1>
                                }
                            </table>
                        </div>
                        <textarea onresize="none" placeholder="Leave a comment..." className="p-2 resize-none" name="text"></textarea>
                    </div>

                    <div className="flex justify-between modal-window--footer px-8">
                        <h2>Payable: {resultPrice}som</h2>
                        <button>Place an order</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Basket;