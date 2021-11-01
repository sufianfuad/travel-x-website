import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import menuLogo from '../../../images/logo/travel_logo.png';
//css
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navbar" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="menu-logo me-2">
                            <img src={menuLogo} className="" alt="" />
                        </div>
                        <Navbar.Brand className="fw-bolder title text-warning" href="#home"><span className="nav-color">Travel</span>X</Navbar.Brand>
                    </div>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="items" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="items" as={Link} to="/tourOffers">Tour Offers</Nav.Link>
                        <Nav.Link className="items" as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link className="items" as={Link} to="/allOrder">Manage All Orders</Nav.Link>
                        <Nav.Link className="items" as={Link} to="/addTour">Add New Tour</Nav.Link>
                        {user?.email ?
                            <button
                                onClick={logOut}
                                className="btn btn-secondary me-2"
                            >LogOut</button>
                            :
                            <Nav.Link
                                className="items"
                                as={Link}
                                to="/login"
                            >Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {user?.email &&
                                <span className="me-2 p-color"><a href="#login"><span className
                                    ="user">{user?.displayName}</span></a></span>
                            }
                            {user?.email &&
                                <span><img className="profile" src={user?.photoURL} alt="" /></span>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;