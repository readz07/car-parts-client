import React from 'react';
import BusinessStats from '../BusinessStats/BusinessStats';
import Banner from '../Banner/Banner';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import OrderQuotation from '../OrderQuotation/OrderQuotation';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts></Parts>
            <BusinessStats/>
            <Reviews/>
            <OrderQuotation/>
            <Map></Map>
        </div>
    );
};

export default Home;