import React from 'react'
import './CartList.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaRegListAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';


const CartList = () => {
    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon"><FaRegListAlt /></li>
                        <li>購物車</li>
                    </ol>
                    <h3>購物車</h3>
                </div>
            </div>
            <div className="container">
                <ul className="step">
                    <li className="step1-active">
                    </li>
                    <li className="step2-active">
                    </li>
                    <li className="step3-active">
                    </li>
                </ul>
                <div className="content">
                    <div className="content-wrap">
                        <h3>CartList</h3>
                        <span className="content-Cartlist-title">CartList Detail</span>

                        <ul className="content-wrap-ul">
                            <li>
                                <img className="objectFit" src="https://cdn.pixabay.com/photo/2017/10/18/06/17/primal-future-2863076_960_720.jpg"></img></li>
                            <li>THE Whey 尖端乳清蛋白 獨特三合一配方 營養補劑全新標準</li>
                            <li>$3000</li>
                            <ul className="icon-list">
                                <a className="icon" href="/"><FaTrashAlt /></a>
                                <a className="icon" href="/"><FaStar /></a>
                            </ul>
                        </ul>
                        <ul className="content-wrap-ul">
                            <li>
                                <img className="objectFit" src="https://cdn.pixabay.com/photo/2017/10/18/06/17/primal-future-2863076_960_720.jpg"></img></li>
                            <li>THE Whey 尖端乳清蛋白 獨特三合一配方 營養補劑全新標準</li>
                            <li>$3000</li>
                            <ul className="icon-list">
                                <a className="icon" href="/"><FaTrashAlt /></a>
                                <a className="icon" href="/"><FaStar /></a>
                            </ul>                        </ul>
                        <ul className="content-wrap-ul">
                            <li>
                                <img className="objectFit" src="https://cdn.pixabay.com/photo/2017/10/18/06/17/primal-future-2863076_960_720.jpg"></img></li>
                            <li>THE Whey 尖端乳清蛋白 獨特三合一配方 營養補劑全新標準</li>
                            <li>$3000</li>
                            <ul className="icon-list">
                                <a className="icon" href="/"><FaTrashAlt /></a>
                                <a className="icon" href="/"><FaStar /></a>
                            </ul>                        </ul>
                        <div className="fav-content-wrap">
                            <span className="content-Cartlist-title">Favorite Detail</span>
                            <ul className="fav-wrap-ul">
                                <li>
                                    <img className="objectFit" src="https://cdn.pixabay.com/photo/2017/10/18/06/17/primal-future-2863076_960_720.jpg"></img></li>
                                <li>THE Whey 尖端乳清蛋白 獨特三合一配方 營養補劑全新標準</li>
                                <li>$3000</li>
                                <ul className="icon-list">
                                    <a className="icon" href="/"><FaTrashAlt /></a>
                                    <a className="icon" href="/"><FaStar /></a>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="content-right">
                        <div>總計：</div>
                        <h3>$342</h3>
                        <div>折扣：$200</div>
                        <div>總計：$142</div>
                        <input type="text" placeholder="輸入優惠券"></input>

                        <button>結帳</button>
                    </div>
                </div>
            </div>
            <footer className="footer"></footer>
        </>
    )

}



export default CartList