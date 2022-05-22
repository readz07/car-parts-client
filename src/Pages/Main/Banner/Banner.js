import React from 'react';
import bannerImg from '../../../assets/images/banner/car-parts-banner.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold w-50">CAR PARTS UNIVERSE</h1>
                    <p className="py-6">Without any dought we are the best car parts manufacturer</p>
                    <button className="btn btn-primary">Get A Quotation</button>
                </div>
                <img src={bannerImg} alt="car parts" width='600'/>
            </div>
        </div>
    );
};

export default Banner;