import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2>This is Home Page</h2>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;