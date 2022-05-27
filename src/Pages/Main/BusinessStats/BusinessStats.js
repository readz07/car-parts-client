import React from 'react';

const BusinessStats = () => {
    return (
        <div>
            <div className="text-center" style={{ background: "url(https://i.ibb.co/g6hdfLd/car-parts-bd.png)?no-repeat", backgroundSize: "cover" }}>
                <h5 className='text-5xl text-primary m-5 font-bold uppercase'>Our Business Statistics</h5>
                <div className="stats shadow">

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Products</div>
                        <div className="stat-value">3</div>
                        <div className="stat-desc">More products are coming soon!</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Custmoers</div>
                        <div className="stat-value text-primary">4,200</div>
                        <div className="stat-desc text-primary">Return Custmoers 90%</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessStats;