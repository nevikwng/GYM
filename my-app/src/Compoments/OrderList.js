import React from 'react'
import '../styles/OrdessrList.css'




const OrderList = () => {


    return (
        <>
            <div className="container">

                <div id="main">
                    <div className="article">
                        <ul className="menu">
                            <li>全部訂單</li>
                            <li>出貨中</li>
                            <li>完成</li>
                            <li>取消</li>
                        </ul>
                        <input type="search" className="search" placeholder="您可以透過訂單編號及商品名稱搜尋"></input>
                        <div className="article-caption">
                            <span className="article-caption-list">訂單紀錄</span>
                            目前開放一年內的即時訂單處理情形查詢。<br />
                                若您欲調閱之前的交易紀錄，請與客服人員聯繫。<br />
                                您最近一年內的購買記錄共計<span>2</span>筆，退貨<span>0</span>次。<br />
                        </div>
                        <table className="articleTable">

                            <thead>
                                <tr>
                                    <th>訂單編號</th>
                                    <th >訂購時間</th>
                                    <th >應付金額</th>
                                    <th >付款方式</th>
                                    <th >訂購方式</th>
                                    <th >訂單狀態</th>
                                    <th >客　　服</th>
                                    <th >取消</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="">202005300089</a></td>
                                    <td >2020/05/30 13:09:35</td>
                                    <td >$ 1370</td>
                                    <td>信用卡</td>
                                    <td>網站</td>
                                    <td>交易進行中</td>
                                    <td><a href="">我要詢問</a></td>
                                    <td><img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" /></td>
                                </tr>
                                <tr>
                                    <td><a href="">202005300089</a></td>
                                    <td >2020/05/30 13:09:35</td>
                                    <td >$ 1370</td>
                                    <td>信用卡</td>
                                    <td>網站</td>
                                    <td>交易完成</td>
                                    <td><a href="">我要詢問</a></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="notice-list">
                            <span>注意事項</span>
                            <ul className="notice-list-ul">
                                <li>※尚未出貨的網路訂單可點選<img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" />按鈕，即可取消該筆訂單。</li>
                                <li>※狀態為「已出貨」之商品，不可取消訂單，如需換退貨請依照退貨辦法進行辦理。</li>
                                <li>※在您主動取消訂單後，將自動喪失首次購物100元現金折扣，取消前請特別注意。</li>
                            </ul>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li>會員中心</li>
                            <li>我的帳戶</li>
                            <li>我的課程</li>
                            <li>購買清單</li>
                            <li>優惠券</li>
                        </ul>
                    </nav>
                </div>

            </div>
            <footer className="footer">footer</footer>
        </>
    )

}



export default OrderList