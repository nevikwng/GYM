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
                <form className="content">
                    <div className="content-wrap">
                        <span className="content-list">結帳</span>
                        <ul className="content-list-detail">
                            <li>帳單地址</li>
                           <select>
                               <option>台北</option>
                           </select>
                        </ul>

                    </div>
                    <div className="content-right">
                        <div>總計：</div>
                        <h3>$342</h3>
                        <div>折扣:$200</div>
                        <div>總計：$142</div>
                        <button type="submit">結帳</button>
                        <input type="text" placeholder="輸入優惠券"></input>
                    </div>
                </form>
            </div>

        </>
    )

}


export default CheckOutPage

