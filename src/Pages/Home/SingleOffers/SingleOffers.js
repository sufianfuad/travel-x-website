import React from 'react';
import './SingleOffers.css'

const SingleOffers = ({ offer }) => {
    const { id, name, TourCost, description, rating, image } = offer;
    return (
        <div className="col-lg-3 col-md-3 col-6">
            <div className="offer-card">
                <div className="offer-img">
                    <img src={image} alt="" />
                </div>
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p>Package ${TourCost}</p>
                    <p><small>{rating}</small></p>
                    <p>{description}</p>
                </div>
                <div className="booking-btn">
                    <button className="btn btn-primary">Booking Tour</button>
                </div>

            </div>
        </div>
    );
};

export default SingleOffers;