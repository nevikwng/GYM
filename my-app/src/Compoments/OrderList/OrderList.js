import React, { useState, useEffect } from 'react'
import './OrdessrList.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import OrderListDetail from './OrderListDetail'


const OrderList = () => {
    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon"><FaHome /></li>
                        <li>訂單紀錄</li>
                    </ol>
                    <h3>訂單紀錄</h3>
                </div>
            </div>
            <div className="container">
                <div className="article">
                    <ul className="menu">
                        <Link to="/OrderList"> <li>全部訂單</li></Link>
                        <Link to="/"><li>出貨中</li></Link>
                        <Link to="/"><li>完成</li></Link>
                        <Link to="/"><li>取消</li></Link>
                    </ul>
                    <OrderListDetail />
                </div>
            </div>
            <footer className="footer"></footer>
        </>
    )
}



export default OrderList