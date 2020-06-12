import React from 'react'
import '../styles/CheckOutPage.scss'
import { FaRegListAlt } from 'react-icons/fa';

const CheckOutPage = () => {
    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon"><FaRegListAlt /></li>
                        <li>CheckOutPage</li>
                    </ol>
                    <h3>CheckOutPage</h3>
                </div>
            </div>
            <div className="container">
                <ul className="step">
                    <li className="step1-active">
                    </li>
                    <li className="step2-active-extend">
                    </li>
                    <li className="step3-active">
                    </li>
                </ul>
                <form className="content">
                    <div className="content-wrap-Checkoutpage">
                        <h3>CHECKOUT</h3>
                        <span className="content-list-title">Billing details</span>
                        <ul className="content-list-detail">
                            <input type="text" id="user_name" name="name" value="" placeholder="請輸入姓名" required="required" />
                            <div className="detail-select">
                                <select className="content-list-detail-select">
                                    <option value="臺北市">臺北市</option><option value="基隆市">基隆市</option><option value="新北市">新北市</option><option value="宜蘭縣">宜蘭縣</option><option value="新竹市">新竹市</option><option value="新竹縣">新竹縣</option><option value="桃園市">桃園市</option><option value="苗栗縣">苗栗縣</option><option value="臺中市">臺中市</option><option value="彰化縣">彰化縣</option><option value="南投縣">南投縣</option><option value="嘉義市">嘉義市</option><option value="嘉義縣">嘉義縣</option><option value="雲林縣">雲林縣</option><option value="臺南市">臺南市</option><option value="高雄市">高雄市</option><option value="澎湖縣">澎湖縣</option><option value="屏東縣">屏東縣</option><option value="臺東縣">臺東縣</option><option value="花蓮縣">花蓮縣</option><option value="金門縣">金門縣</option><option value="連江縣">連江縣</option>
                                </select>
                                <select name="district" ><option value="中正區">100 中正區</option><option value="大同區">103 大同區</option><option value="中山區">104 中山區</option><option value="松山區">105 松山區</option><option value="大安區">106 大安區</option><option value="萬華區">108 萬華區</option><option value="信義區">110 信義區</option><option value="士林區">111 士林區</option><option value="北投區">112 北投區</option><option value="內湖區">114 內湖區</option><option value="南港區">115 南港區</option><option value="文山區">116 文山區</option></select>
                            </div>
                            <input type="text" id="tel" value="" name="mobile" placeholder="請輸入手機號碼" required="required" ></input>
                            <input type="text" name="address" placeholder="請輸入地址" required="required" />
                            <input type="text" id="email" value="" name="mail" placeholder="請輸入E-mail" />
                        </ul>
                        <div className="content-wrap-Checkoutpage-recipient-district">
                            <div className="recipient-district-input">
                                <input type="checkbox" id="recipient-district-input"/>
                                <h3>Ship to a different address?</h3>
                            </div>
                            <ul className="content-list-detail">
                                <input type="text" id="recipient-user_name" name="recipient-name" value="" placeholder="請輸入姓名" required="required" />
                                <div className="detail-select">
                                    <select className="content-list-detail-select">
                                        <option value="臺北市">臺北市</option><option value="基隆市">基隆市</option><option value="新北市">新北市</option><option value="宜蘭縣">宜蘭縣</option><option value="新竹市">新竹市</option><option value="新竹縣">新竹縣</option><option value="桃園市">桃園市</option><option value="苗栗縣">苗栗縣</option><option value="臺中市">臺中市</option><option value="彰化縣">彰化縣</option><option value="南投縣">南投縣</option><option value="嘉義市">嘉義市</option><option value="嘉義縣">嘉義縣</option><option value="雲林縣">雲林縣</option><option value="臺南市">臺南市</option><option value="高雄市">高雄市</option><option value="澎湖縣">澎湖縣</option><option value="屏東縣">屏東縣</option><option value="臺東縣">臺東縣</option><option value="花蓮縣">花蓮縣</option><option value="金門縣">金門縣</option><option value="連江縣">連江縣</option>
                                    </select>
                                    <select name="recipient-district" ><option value="中正區">100 中正區</option><option value="大同區">103 大同區</option><option value="中山區">104 中山區</option><option value="松山區">105 松山區</option><option value="大安區">106 大安區</option><option value="萬華區">108 萬華區</option><option value="信義區">110 信義區</option><option value="士林區">111 士林區</option><option value="北投區">112 北投區</option><option value="內湖區">114 內湖區</option><option value="南港區">115 南港區</option><option value="文山區">116 文山區</option></select>
                                </div>
                                <input type="text" id="recipient-tel" value="" name="recipient-mobile" placeholder="請輸入手機號碼" required="required" ></input>
                                <input type="text" name="recipient-address" placeholder="請輸入地址" required="required" />
                                <input type="text" id="recipient-email" value="" name="recipient-mail" placeholder="請輸入E-mail" />
                            </ul>
                        </div>
                    </div>

                    <div className="content-right">
                        <div>總計：</div>
                        <h3>$342</h3>
                        <div>折扣：$200</div>
                        <div>總計：$142</div>
                        <button type="submit">完成</button>
                        <button >修改付款方式</button>
                    </div>
                </form>
            </div>

        </>
    )

}


export default CheckOutPage

