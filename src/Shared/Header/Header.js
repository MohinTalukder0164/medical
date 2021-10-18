import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Login from '../../Important/Login/Login';
import './Header.css'

const Header = () => {

    const { user, logOutGoogle } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img src="https://i.ibb.co/prY3wBw/download-1.webp" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link to="/home">Home</Link>
                            <Link to="/about"> About</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/service">Service</Link>
                            <Link to="/contact">Contact</Link>


                            <Link to="/register">Register</Link>
                            <button className="btn-danger login-btn ">
                                <Link to="/login"><i class="fas fa-sign-in-alt"><span className="font mx-1"> Login</span></i></Link></button>


                            <br />
                            {
                                user.email &&
                                <button onClick={logOutGoogle} className="btn-secondary p-1 me-3  mx-3"><i class="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                            }
                        </Nav>
                        <Navbar.Text>
                            {
                                user.email && <p>   <b> Welcome:</b> <br /> {user.displayName}</p>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>
    );
};

export default Header;