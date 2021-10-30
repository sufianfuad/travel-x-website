import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlaceOrder.css';
const PlaceOrder = () => {
    const { bookingId } = useParams();

    const [bookingDetails, setBookingDetails] = useState([]);
    const [order, setOrder] = useState({});

    // //data load
    useEffect(() => {
        fetch('/tourOffer.json')
            .then(res => res.json())
            .then(data => setBookingDetails(data))
    }, []);

    useEffect(() => {
        if (bookingDetails.length > 0) {
            const selectedItem = bookingDetails.find(item => item?.id == bookingId)
            setOrder(selectedItem);
        }
    }, [bookingDetails]);

    return (
        <div className="placeOrder-container">
            <div className="container">
                <h2 className="text-center">This is Booking: {bookingId}</h2>
                <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <h2>Confirm your Order</h2>
                            </div>
                        </div>


                    </div>
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img">
                                    <img src={order?.image} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>You Choose {order?.name}</h4>
                                    <p>{order?.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><strong>Tour Package {order?.TourCost}$</strong> only.</p>
                                        <p>Review : <strong>{order?.rating}</strong> </p>
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