import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
const PlaceOrder = () => {
    const { bookingId } = useParams();
    const { user } = useAuth();

    const [bookingDetails, setBookingDetails] = useState([]);
    // const [order, setOrder] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        console.log(data)
        fetch('http://localhost:7000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Order successfully processed')
                    reset()
                }
            })
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
                                    <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                                    <input defaultValue={user?.email} {...register("email")} placeholder="Give your Email" />
                                    <input type="text" {...register("tour_name")} placeholder="Tour Place Name" />
                                    <input {...register("date")} type="date" />
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