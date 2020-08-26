import React from 'react';
export default function MarketListing() {
    return <>
<div className="side-b-content d-inline-block v-align-top">
<div className="block-content market-wrapper">
    <div className="market-list-main">
        <div className="block-header with-icon">
            <h3>Market List</h3>
        </div>
        <div className="market-filters">
            <form>
                <input type="text" className="form-control" placeholder="search" />
            </form>
            <div className="dropdown market-all-drop">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                <div className="dropdown-menu pull-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className="star-icon"><i className="fa fa-star" aria-hidden="true"></i></div>
        </div>

        <div className="market-table">
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