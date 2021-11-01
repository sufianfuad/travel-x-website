import React from 'react';
//react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './SingleOffers.css'

const SingleOffers = ({ offer }) => {
    const { _id, name, TourCost, description, rating, image } = offer;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="offer-card text-center">
                <div className="offer-img">
                    <img src={image} alt="" />
                </div>
                {/* travel Offers info */}
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p><span className="tour-cost">Package ${TourCost}</span></p>
                    <p><small><span className="rating-color">{rating}</span></small></p>
                    <p>{description}</p>
                </div>
                <div className="booking-btn p-2">
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn fw-bold
                         px-3 py-2 book-btn">Book Now</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleOffers;