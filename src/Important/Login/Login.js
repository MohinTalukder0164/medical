import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../UseAuth/UseFirebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Hooks/firebase.init';

initializeAuthentication()

const Login = () => {

    const { signInUsingGoole } = useFirebase()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
            })
            .catch((error) => {
                setError(error.code)
                setError(error.message)

            });

    }

    return (
        <Container>
            <div className="font">
                <form onSubmit={handleLogin}>
                    <div className="container">
                        <h1>Login</h1>
                        <p>Please fill in this form to Login a account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input onBlur={handleEmail} type="text" placeholder="Enter Email" name="email" id="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input onBlur={handlePassword} type="password" placeholder="Enter Password" name="psw" id="psw" required />
                        <hr />
                        {error}
                        <div>
                            <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                            <button type="submit" className="registerbtn">Login</button>
                        </div>

                        <div className="container signin">
                            <p>Dont have an account? < Link to="/register">Register now</Link>.</p>
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