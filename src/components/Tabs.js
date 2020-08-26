import React from 'react';
export default function Tabs() {
    return <>
        <div className="block-content overview-wrapper">
            <div className="overview-tabs">
                <section>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item waves-effect waves-light active">
                            <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">My Assets</a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pending Orders</a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Trade History</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade active in" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="overview-table">
                                <table className="table table-dark table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Balance</th>
                                            <th>Average price</th>
                                            <th>Buy value</th>
                                            <th>ESt. Value</th>
                                            <th>Profilt/Loss(%)</th>
                                            <th>Profilt/Loss</th>
                                            <th>Available Balance</th>
                                            <th><i className="fa fa-star" aria-hidden="true"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ETH (Ethereum)</td>
                                            <td>0.18 ETH</td>
                                            <td>10,000 USDT</td>
                                            <td>1,800 USDT</td>
                                            <td>0.0000 USDT</td>
                                            <td>- 100.00%</td>
                                            <td>- 1,800.0000 USDT</td>
                                            <td>0.1 ETH</td>
                                            <td><i className="fa fa-star" aria-hidden="true"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie
                        locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog
                        sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                        booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo
                        nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero
                        magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean
            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape wayfarers,
                        ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi
                        farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                        carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
                        pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk
            vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                    </div>
                </section>
            </div>
        </div>

    </>
}