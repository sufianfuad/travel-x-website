import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';


const MyOrders = () => {
    const { user } = useAuth();
    //Order state
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-basin-98132.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    //Delete order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `https://sleepy-basin-98132.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }

    }
    return (
        <div className="myOrder-Container">
            <div className="container">
                <h2 className="text-center pb-3">My Orders Here: {orders.length}</h2>
                {user.email &&
                    <div className="pb-3">
                        {/* my order list in a table */}
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
                                            onClick={() => handleDeleteOrder(order._id)}
                                            className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                        <Link to={`/orders/update/${order._id}`}>
                                            <button
                                                onClick=""
                                                className="btn btn-danger delete-btn px-3 py-2">Update</button>
                                        </Link>

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