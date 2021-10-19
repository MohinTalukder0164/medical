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
                            {
                                !user.email && <div className="py-1 my-1">
                                    <button className="btn-primary p-1 mx-3 login-btn"> <Link to="/register"><i class="fas fa-user-plus"><span className="font"> Register</span></i></Link></button>
                                    <button className="btn-danger login-btn ">
                                        <Link to="/login"><i class="fas fa-sign-in-alt"><span className="font"> Login</span></i></Link></button>
                                </div>
                            }
                            <br />


                            {
                                user.email && <p className="p-1 mx-1" ><i class=" fas fa-user-tie"><span className="font">  {user.displayName}</span></i></p>
                            }
                            {
                                user.email &&
                                <button onClick={logOutGoogle} className="btn-warning  "><i class="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                            }
                        </Nav>
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

        </>
    );
};

export default Header;