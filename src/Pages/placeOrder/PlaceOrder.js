import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './PlaceOrder.css';
const PlaceOrder = () => {
    const { bookingId } = useParams();

    const [bookingDetails, setBookingDetails] = useState([]);
    // const [order, setOrder] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    // //data load
    useEffect(() => {
        fetch(`http://localhost:7000/tourOffers/${bookingId}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data))
    }, []);
    return (
        <div className="placeOrder-container">
            <div className="container">
                <h2 className="text-center">This is Booking: {bookingId}</h2>
                <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                                    <input {...register("email")} placeholder="Give your Email" />
                                    <input type="text" {...register("Address")} placeholder="Address" />
                                    <input type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img">
                                    <img src={bookingDetails?.image} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>You Choose {bookingDetails?.name}</h4>
                                    <p>{bookingDetails?.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><strong>Tour Package {bookingDetails?.TourCost}$</strong> only.</p>
                                        <p>Review : <strong>{bookingDetails?.rating}</strong> </p>
                                    </div>
                                    <button className="btn btn-success px-3 py-2">Back Tour Offers</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;