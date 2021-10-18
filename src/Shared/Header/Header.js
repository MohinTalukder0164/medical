import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://i.ibb.co/prY3wBw/download-1.webp" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/home">Home</Link>
                            <Link to="/about"> About</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/service">Service</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/register">Register</Link>
                            <button className="btn-danger login-btn "> <Link to="/login">Login</Link></button>
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;