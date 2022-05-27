import React from 'react';

const BusinessStats = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow grid lg:grid-4 md:grid-2 sm-grid:2 mx-12 sm:mx-24">

            <div class="stat">
                <div class="stat-title xs:text-center md:text-center sm:text-center lg:text-left">Total Orders</div>
                <div class="stat-value  xs:text-center md:text-center sm:text-center lg:text-left">31K</div>
                <div class="stat-desc   xs:text-center md:text-center sm:text-center lg:text-left">Jan 1st - Feb 1st</div>
            </div>

            <div class="stat">
                <div class="stat-title xs:text-center md:text-center sm:text-center lg:text-left">Total Sales</div>
                <div class="stat-value xs:text-center md:text-center sm:text-center lg:text-left">444,200</div>
                <div class="stat-desc xs:text-center md:text-center sm:text-center lg:text-left">↗︎ 1111400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title xs:text-center md:text-center sm:text-center lg:text-left">Users</div>
                <div class="stat-value xs:text-center md:text-center sm:text-center lg:text-left">34,200</div>
                <div class="stat-desc xs:text-center md:text-center sm:text-center lg:text-left">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title xs:text-center md:text-center sm:text-center lg:text-left">New Registers</div>
                <div class="stat-value xs:text-center md:text-center sm:text-center lg:text-left">10,200</div>
                <div class="stat-desc xs:text-center md:text-center sm:text-center lg:text-left">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default BusinessStats;