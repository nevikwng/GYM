import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';

async function DelToSever(orderId) {
    // 注意資料格式要設定，伺服器才知道是json格式
    axios.post(`http://localhost:3000/address-book/api/del/${orderId}`, {
        method: 'POST',
        credentials: 'include', // 需傳送 Cookie 必須開啟
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }),
        params: { orderId: orderId },
    })
    window.location.reload()
}
const OrderListDetail = () => {

    const [data, setData] = useState({ rows: [] });
    const [search, setSearch] = useState();

    useEffect(() => {
        const FetchData = async () => {
            const result = await axios(
                'http://localhost:3000/address-book/api/OrderList');
            setData(result.data);

        }
        FetchData();
    }, []);


    return (
        <>
            <input type="search" className="search" onChange={(event) => setSearch(event.target.value)} placeholder="您可以透過訂單編號搜尋"></input>

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
                {search ? data.rows.filter(item => item.orderId == search).map((item, index) => (
                    <ul key={index} className="wrap-ul">
                        <li><a href="">{item.orderId}</a></li>
                        <li>{item.created_at}</li>
                        <li>$ {item.Total}</li>
                        <li>{item.PayMentMethod}</li>
                        {item.OrderStatus == 1 ? <li>交易進行中</li> : <li> 交易完成 </li>}
                        <li><a href="/service">我要詢問</a></li>
                        {item.OrderStatus == 1 ? <li><a className="icon" onClick={() => { DelToSever(item.orderId) }}><FaTrashAlt /></a></li> : <li> 交易完成如需退貨請洽客服中心</li>}
                    </ul>
                )) : data.rows.map((item, index) => (
                    <ul key={index} className="wrap-ul">
                        <li><a href="">{item.orderId}</a></li>
                        <li>{item.created_at}</li>
                        <li>$ {item.Total}</li>
                        <li>{item.PayMentMethod}</li>
                        {item.OrderStatus == 1 ? <li>交易進行中</li> : <li> 交易完成 </li>}
                        <li><a href="/service">我要詢問</a></li>
                        {item.OrderStatus == 1 ? <li><a className="icon" onClick={() => { DelToSever(item.orderId) }}><FaTrashAlt /></a></li> : <li> 交易完成如需退貨請洽客服中心</li>}
                    </ul>
                ))}
            </div>
            <div className="notice-list">
                <ul className="notice-list-ul">
                    <span className="article-caption-list">注意事項</span><br />
                    <li>※您最近一年內的購買記錄共計<span>{data.rows.length}</span>筆，退貨<span>0</span>次。</li>
                    <li>※尚未出貨的網路訂單可點選<img src="//www.orbis.com.tw/assets/default/i/icon-delete.gif" alt="取消" />按鈕，即可取消該筆訂單。</li>
                    <li>※狀態為「已出貨」之商品，不可取消訂單，如需換退貨請依照退貨辦法進行辦理。</li>
                    <li>※在您主動取消訂單後，將自動喪失首次購物100元現金折扣，取消前請特別注意。</li>

                </ul>
            </div>
        </>
    )
}

export default OrderListDetail;