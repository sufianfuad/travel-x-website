import React, { useEffect, useState } from 'react';
import SingleOffers from '../SingleOffers/SingleOffers';

import './TourOffers.css'
const TourOffers = () => {

    const [tourOffers, setTourOffers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/tourOffers')
            .then(res => res.json())
            .then(data => setTourOffers(data))
    }, [])
    return (
        <div className="tourOffer-container">
            <div className="text-center pb-3">
                <div className="offer-title">
                    <p>Choose Our Offer Package</p>
                    <h4 className="animate__animated animate__bounce">Select Your Best Package For Your Travel</h4>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    {
                        tourOffers.map(offer => <SingleOffers
                            key={offer.id}
                            offer={offer}
                        ></SingleOffers>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourOffers;