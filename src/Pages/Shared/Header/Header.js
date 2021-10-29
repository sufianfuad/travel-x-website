import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//css
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bolder text-warning" href="#home">TravelX</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tourOffers">Tour Offers</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrders">ManageAll Orders</Nav.Link>
                        <Nav.Link as={Link} to="/addTour">Add Tour</Nav.Link>
                        {/* <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}

                        {user?.email ?
                            <button
                                onClick={logOut}
                                className="btn btn-secondary me-2"
                            >LogOut</button>
                            :
                            <Nav.Link
                                as={Link}
                                to="/login"
                            >Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {user?.email &&
                                <span className="">Profile: <a href="#login">{user?.displayName}</a></span>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;