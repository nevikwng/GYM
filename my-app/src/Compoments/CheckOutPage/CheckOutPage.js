import React, { useState } from "react";
import "./CheckOutPage.scss";
import { FaRegListAlt } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";

async function DelToSever(item) {
    // 注意資料格式要設定，伺服器才知道是json格式
    console.log(item);
    axios.post(`http://localhost:3000/address-book/api/addCheckOutPage`, {
        method: "POST",
        credentials: "include", // 需傳送 Cookie 必須開啟
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
        }),
        data: {
            Name: item.Name,
            City: item.Select,
            District: item.District,
            Mobile: item.Mobile,
            Address: item.Address,
            Email: item.Email,
            recipientName: item.recipientName,
            recipientSelect: item.recipientSelect,
            recipientDistrict: item.recipientDistrict,
            recipientMobile: item.recipientMobile,
            recipientAddress: item.recipientAddress,
            recipientEmail: item.recipientEmail,
        },
    });
}

const CheckOutPage = () => {
    const history = useHistory();
    const [Name, setName] = useState();
    const [Select, setSelect] = useState();
    const [District, setDistrict] = useState();
    const [Mobile, setMobile] = useState();
    const [Address, setAddress] = useState();
    const [Email, setEmail] = useState();
    const [recipientName, setrecipientName] = useState(null);
    const [recipientSelect, setrecipientSelect] = useState(null);
    const [recipientDistrict, setrecipientDistrict] = useState(null);
    const [recipientMobile, setrecipientMobile] = useState(null);
    const [recipientAddress, setrecipientAddress] = useState(null);
    const [recipientEmail, setrecipientEmail] = useState(null);
    const [checkbox, setcheckbox] = useState(false);

    return (
        <>
            <div className="title">
                <div className="title-cotainer">
                    <ol className="title-ol">
                        <li className="icon">
                            <FaRegListAlt />
                        </li>
                        <li>CheckOutPage</li>
                    </ol>
                    <h3>CheckOutPage</h3>
                </div>
            </div>
            <div className="container">
                <ul className="step">
                    <li className="step1-active"></li>
                    <li className="step2-active-extend"></li>
                    <li className="step3-active"></li>
                </ul>
                <form
                    className="content"
                    onSubmit={() => {
                        DelToSever({
                            Name,
                            Select,
                            District,
                            Mobile,
                            Address,
                            Email,
                            recipientName,
                            recipientSelect,
                            recipientDistrict,
                            recipientMobile,
                            recipientAddress,
                            recipientEmail,
                        });
                    }}
                >
                    <div className="content-wrap-Checkoutpage">
                        <h3>CHECKOUT</h3>
                        <span className="content-list-title">Billing details</span>
                        <ul className="content-list-detail">
                            <input
                                className="content-list-detail-input"
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                id="user_name"
                                name="name"
                                placeholder="請輸入姓名"
                                required="required"
                            />
                            <div className="detail-select">
                                <select
                                    name="city"
                                    className="content-list-detail-select"
                                    onChange={(event) => setSelect(event.target.value)}
                                >
                                    <option value="臺北市">臺北市</option>
                                    <option value="基隆市">基隆市</option>
                                    <option value="新北市">新北市</option>
                                    <option value="宜蘭縣">宜蘭縣</option>
                                    <option value="新竹市">新竹市</option>
                                    <option value="新竹縣">新竹縣</option>
                                    <option value="桃園市">桃園市</option>
                                    <option value="苗栗縣">苗栗縣</option>
                                    <option value="臺中市">臺中市</option>
                                    <option value="彰化縣">彰化縣</option>
                                    <option value="南投縣">南投縣</option>
                                    <option value="嘉義市">嘉義市</option>
                                    <option value="嘉義縣">嘉義縣</option>
                                    <option value="雲林縣">雲林縣</option>
                                    <option value="臺南市">臺南市</option>
                                    <option value="高雄市">高雄市</option>
                                    <option value="澎湖縣">澎湖縣</option>
                                    <option value="屏東縣">屏東縣</option>
                                    <option value="臺東縣">臺東縣</option>
                                    <option value="花蓮縣">花蓮縣</option>
                                    <option value="金門縣">金門縣</option>
                                    <option value="連江縣">連江縣</option>
                                </select>
                                <select
                                    className="content-list-detail-select"
                                    name="district"
                                    onChange={(event) => setDistrict(event.target.value)}
                                >
                                    <option value="中正區">100 中正區</option>
                                    <option value="大同區">103 大同區</option>
                                    <option value="中山區">104 中山區</option>
                                    <option value="松山區">105 松山區</option>
                                    <option value="大安區">106 大安區</option>
                                    <option value="萬華區">108 萬華區</option>
                                    <option value="信義區">110 信義區</option>
                                    <option value="士林區">111 士林區</option>
                                    <option value="北投區">112 北投區</option>
                                    <option value="內湖區">114 內湖區</option>
                                    <option value="南港區">115 南港區</option>
                                    <option value="文山區">116 文山區</option>
                                </select>
                            </div>
                            <input
                                onChange={(event) => setMobile(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                id="tel"
                                name="mobile"
                                placeholder="請輸入手機號碼"
                                required="required"
                            ></input>
                            <input
                                onChange={(event) => setAddress(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                name="address"
                                placeholder="請輸入地址"
                                required="required"
                            />
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                className="content-list-detail-input"
                                type="text"
                                id="email"
                                name="mail"
                                placeholder="請輸入E-mail"
                            />
                        </ul>
                        <div className="content-wrap-Checkoutpage-recipient-district">
                            <div className="recipient-district-input">
                                <input
                                    onChange={(event) => setcheckbox(event.target.checked)}
                                    className="content-list-detail-input"
                                    type="checkbox"
                                    id="recipient-district-input"
                                />
                                <h3>Ship to a different address?</h3>
                            </div>
                            {checkbox ? (
                                <ul className="content-list-detail">
                                    <input
                                        onChange={(event) => setrecipientName(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-user_name"
                                        name="recipient-name"
                                        placeholder="請輸入姓名"
                                        required="required"
                                    />
                                    <div className="detail-select">
                                        <select
                                            onChange={(event) =>
                                                setrecipientSelect(event.target.value)
                                            }
                                            className="content-list-detail-select"
                                        >
                                            <option value="臺北市">臺北市</option>
                                            <option value="基隆市">基隆市</option>
                                            <option value="新北市">新北市</option>
                                            <option value="宜蘭縣">宜蘭縣</option>
                                            <option value="新竹市">新竹市</option>
                                            <option value="新竹縣">新竹縣</option>
                                            <option value="桃園市">桃園市</option>
                                            <option value="苗栗縣">苗栗縣</option>
                                            <option value="臺中市">臺中市</option>
                                            <option value="彰化縣">彰化縣</option>
                                            <option value="南投縣">南投縣</option>
                                            <option value="嘉義市">嘉義市</option>
                                            <option value="嘉義縣">嘉義縣</option>
                                            <option value="雲林縣">雲林縣</option>
                                            <option value="臺南市">臺南市</option>
                                            <option value="高雄市">高雄市</option>
                                            <option value="澎湖縣">澎湖縣</option>
                                            <option value="屏東縣">屏東縣</option>
                                            <option value="臺東縣">臺東縣</option>
                                            <option value="花蓮縣">花蓮縣</option>
                                            <option value="金門縣">金門縣</option>
                                            <option value="連江縣">連江縣</option>
                                        </select>
                                        <select
                                            onChange={(event) =>
                                                setrecipientDistrict(event.target.value)
                                            }
                                            className="content-list-detail-select"
                                            name="recipient-district"
                                        >
                                            <option value="中正區">100 中正區</option>
                                            <option value="大同區">103 大同區</option>
                                            <option value="中山區">104 中山區</option>
                                            <option value="松山區">105 松山區</option>
                                            <option value="大安區">106 大安區</option>
                                            <option value="萬華區">108 萬華區</option>
                                            <option value="信義區">110 信義區</option>
                                            <option value="士林區">111 士林區</option>
                                            <option value="北投區">112 北投區</option>
                                            <option value="內湖區">114 內湖區</option>
                                            <option value="南港區">115 南港區</option>
                                            <option value="文山區">116 文山區</option>
                                        </select>
                                    </div>
                                    <input
                                        onChange={(event) => setrecipientMobile(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-tel"
                                        name="recipient-mobile"
                                        placeholder="請輸入手機號碼"
                                        required="required"
                                    ></input>
                                    <input
                                        onChange={(event) =>
                                            setrecipientAddress(event.target.value)
                                        }
                                        className="content-list-detail-input"
                                        type="text"
                                        name="recipient-address"
                                        placeholder="請輸入地址"
                                        required="required"
                                    />
                                    <input
                                        onChange={(event) => setrecipientEmail(event.target.value)}
                                        className="content-list-detail-input"
                                        type="text"
                                        id="recipient-email"
                                        name="recipient-mail"
                                        placeholder="請輸入E-mail"
                                    />
                                </ul>
                            ) : (
                                    ""
                                )}
                        </div>
                    </div>

                    <div className="content-right">
                        <div>總計：</div>
                        <h3>$342</h3>
                        <div>折扣：$200</div>
                        <div>總計：$142</div>
                        <button type="submit">完成</button>
                        <button
                            onClick={() => {
                                history.push("/CartList");
                            }}
                        >
                            修改付款方式
            </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CheckOutPage;
