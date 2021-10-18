import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../UseAuth/UseFirebase';

const Login = () => {

    const { signInUsingGoole } = useFirebase()
    return (
        <Container>
            <div className="font">
                <form>
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                        <hr />
                        <div>
                            <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                            <button type="submit" className="registerbtn">Register</button>
                        </div>

                        <div className="container signin">
                            <p>Dont have an account? < Link to="/register">Register</Link>.</p>
                        </div>
                    </div>
                </form>

                <h4>Or Login Using Social Link</h4>
                <hr />
                <button onClick={signInUsingGoole} className="btn-primary">Log In using Google</button>
            </div>
        </Container>
    );
};

export default Login;