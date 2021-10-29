import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//css
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bolder text-warning" href="#home">TravelX</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">User Name</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;