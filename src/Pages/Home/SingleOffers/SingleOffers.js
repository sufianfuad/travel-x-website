import React from 'react';
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
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p><span className="tour-cost">Package ${TourCost}</span></p>
                    <p><small><span className="rating-color">{rating}</span></small></p>
                    <p>{description}</p>
                </div>
                <div className="booking-btn p-2">
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn btn-primary fw-bold
                         px-3 py-2">Book Now</button>
                    </Link>
                    {/* <Link to={`/placeOrder/${_id}`}>
                     d-flex align-items-center justify-content-between
                        <button className="btn btn-primary fw-bold
                         px-3 py-2">Ream More</button>
                    </Link> */}

                </div>

            </div>
        </div>
    );
};

export default SingleOffers;