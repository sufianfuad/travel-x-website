import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllOrder.css'
const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    //DELETE order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `http://localhost:7000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingOrder = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrder);
                    }
                });
        }

    }

    return (
        <div className="allOrder-container">
            <div className="container">
                <h2 className="text-center pb-3">Your Orders Available: {allOrders.length}</h2>
                <div className="pb-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allOrders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.date}</td>
                                    <td><span className="status">{order?.status}</span></td>
                                    <button
                                        onClick={() => handleDeleteOrder(order._id)}
                                        className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;