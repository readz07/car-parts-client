import React from 'react';

const BusinessStats = () => {
    return (
        <div>
            <div class="text-center h-screen" style={{ background: "url(https://i.ibb.co/g6hdfLd/car-parts-bd.png)?no-repeat", backgroundSize: "cover" }}>
                <h5 className='text-5xl text-primary m-5 font-bold uppercase'>Our Business Statistics</h5>
                <div class="stats shadow">

                    <div class="stat place-items-center">
                        <div class="stat-title">Total Products</div>
                        <div class="stat-value">3</div>
                        <div class="stat-desc">More products are coming soon!</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Total Custmoers</div>
                        <div class="stat-value text-primary">4,200</div>
                        <div class="stat-desc text-primary">Return Custmoers 90%</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Users</div>
                        <div class="stat-value text-secondary">4,200</div>
                        <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessStats;