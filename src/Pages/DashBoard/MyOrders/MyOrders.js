import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';


const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if (user?.email) {
            fetch('https://sleepy-basin-98132.herokuapp.com/orders')
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [])
    console.log(orders);
    return (
        <div className="myOrder-Container">
            <div className="container">
                <h2 className="text-center pb-3">My Orders Here: {orders.length}</h2>
                {user.email &&
                    <div className="pb-3">

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Tour Place</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {orders?.map((order, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{order?.name}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.tour_name}</td>
                                        <td>{order?.date}</td>
                                        <td><span className="status">{order?.status}</span></td>
                                        <button
                                            // onClick={() => handleDeleteOrder(order._id)}
                                            className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                        <button>Update</button>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                }

            </div>
        </div>
    );
};

export default MyOrders;