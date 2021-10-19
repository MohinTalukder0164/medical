import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (

        <div>
            <div className="footer-info font">
                <div>
                    <img src="https://i.ibb.co/JR6sN01/xlogo2-footer-png-pagespeed-ic-0v-NK21-OVF.webp" alt="" srcset="" />
                </div>
                <div>
                    <h4>ABOUT US</h4>
                    <p>Healthcare Success is a full-service <br /> marketing and advertising agency .
                    </p>
                </div>
                <div>
                    <h4> +564 7885 <span className="text-green">3222</span> </h4>
                    <p>Email: youremail@gmail.com</p>
                    <h4 >Subscribe to our newsletter</h4>
                    <input type="email" name="email" id="" placeholder="Enter Email" />
                    <br />
                    <button className="btn-primary mx-3 my-3 ">Subscribe</button>
                </div>

            </div>
            <div className=" font foooter-info">
                <p>© 2021 Medical Operation LLC. All rights reserved.</p>

                <p >Created by <a href="fb.ahmedparbes">Ahmed Parbes</a></p>
            </div>
        </div>

    );
};

export default Footer;