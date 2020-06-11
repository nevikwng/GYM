import React from 'react'
import '../styles/OrdessrList.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';




const OrderList = () => {
    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon"><FaHome /></li>
                        <li>訂單查詢</li>
                    </ol>
                    <h3>訂單查詢</h3>
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
                        <input type="search" className="search" placeholder="您可以透過訂單編號及商品名稱搜尋"></input>
                        <div className="wrap">
                            <ul className="wrap-ul">
                                <li>訂單編號</li>
                                <li>訂購時間</li>
                                <li>應付金額</li>
                                <li>付款方式</li>
                                <li>訂單狀態</li>
                                <li>客服中心</li>
                                <li>取消</li>
                            </ul>
                            <ul className="wrap-ul">
                                <li><a href="">202005300089</a></li>
                                <li>2020/05/30</li>
                                <li>$ 1370</li>
                                <li>信用卡</li>
                                <li>交易進行中</li>
                                <li><a href="">我要詢問</a></li>
                                <li><img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" /></li>
                            </ul>
                            <ul className="wrap-ul">
                                <li><a href="">202005300089</a></li>
                                <li>2020/05/30</li>
                                <li>$ 1370</li>
                                <li>信用卡</li>
                                <li>交易進行中</li>
                                <li><a href="">我要詢問</a></li>
                                <li><img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" /></li>
                            </ul>
                        </div>
                        <div className="notice-list">
                            <ul className="notice-list-ul">
                            <span className="article-caption-list">注意事項</span><br/>
                                <li>※您最近一年內的購買記錄共計<span>2</span>筆，退貨<span>0</span>次。</li>
                                <li>※尚未出貨的網路訂單可點選<img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" />按鈕，即可取消該筆訂單。</li>
                                <li>※狀態為「已出貨」之商品，不可取消訂單，如需換退貨請依照退貨辦法進行辦理。</li>
                                <li>※在您主動取消訂單後，將自動喪失首次購物100元現金折扣，取消前請特別注意。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <footer className="footer"></footer>
        </>
    )
}



export default OrderList