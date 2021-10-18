import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer-info font">
            <div>
                <img src="https://i.ibb.co/JR6sN01/xlogo2-footer-png-pagespeed-ic-0v-NK21-OVF.webp" alt="" srcset="" />
            </div>
            <div>
                <h4>ABOUT US</h4>
                <p>Lorem igpsum doldfor sit amet <br />
                    adipiscing elit, sed do eiusmod <br />
                    tempor cergelit rgh.
                </p>
            </div>
            <div>
                <h4> +564 7885 <span className="text-green">3222</span> </h4>
                <p>Email: youremail@gmail.com</p>
                <input type="email" name="email" id="" placeholder="Enter Email" />
                <button className="btn-primary mx-3">Subscribe</button>
            </div>
        </div>

    );
};

export default Footer;