import React from 'react';
import About from '../../About/About';
import LatestBlogs from '../../LatestBlogs/LatestBlogs';
import Banner from '../Banner/Banner';
import TourOffers from '../TourOffers/TourOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourOffers></TourOffers>
            <About></About>
            <LatestBlogs></LatestBlogs>
        </div>
    );
};

export default Home;