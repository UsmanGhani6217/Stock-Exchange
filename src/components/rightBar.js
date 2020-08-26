import React from 'react';
export default function RightBar() {
    return <>
        <div className="side-a-right">
            <div className="block-content orderbook-list-wrapper">
                <div className="orderbook-list">
                    <div className="block-header with-icon">
                        <h3>Order Book</h3>
                        <div className="block-header-icon"><i className="fa fa-expand" aria-hidden="true"></i></div>
                    </div>
                    <div className="orderbook">
                        <table className="table table-dark table-borderless">
                            <tbody>
                                <tr>
                                    <th>BTC/USDT</th>
                                    <th>11,800</th>
                                    <th>8.48%</th>
                                    <th><i className="fa fa-star" aria-hidden="true"></i></th>
                                </tr>
                                <tr>
                                    <th>EST/USDT</th>
                                    <th>11,800</th>
                                    <th>8.48%</th>
                                    <th><i className="fa fa-star" aria-hidden="true"></i></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}