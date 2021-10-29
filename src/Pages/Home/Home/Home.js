import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import TourOffers from '../TourOffers/TourOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourOffers></TourOffers>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;