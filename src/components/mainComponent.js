import React from 'react';
import ApexChart from './chartComponent';
import Header from './graphHeader';
import Tabs from './Tabs';
import RightBar from './rightBar';
import MarketListing from './marketListing';
class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="main-wrapper main-bg-color">
                    <div className="content-wrapper">
                        <div className="side-a-content">
                            <div className="side-a-left">
                                <div className="block-content">
                                    <div className="graph-header">
                                        <Header />
                                    </div>
                                    <div className="graph-wrapper">
                                        <ApexChart />
                                    </div>
                                </div>
                                {/* <!-- Graph End --> */}
                                <Tabs/>
                            </div>
                           <RightBar/>
                        </div>
                        <MarketListing/>
                     </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;