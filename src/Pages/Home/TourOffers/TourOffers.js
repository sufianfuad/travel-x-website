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