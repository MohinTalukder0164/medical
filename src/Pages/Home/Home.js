import React from 'react';
import OurInfo from '../../Components/OurInfo/OurInfo';
import Service from '../../Service/Service';
import Doctors from '../Doctors/Doctors';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home-section" >
                <div className="half-width">
                    <h4>━━━━ COMMITTED TO SUCCESS</h4>
                    <br />
                    <h2>WE CARE ABOUT YOUR HEALTH</h2>
                    <br />
                    <p>We help you any kind fevers. If You want to <br />
                        leade a healthy life. Remember the name</p>
                    <br />
                    <button className="btn">Appointment</button>
                </div>
            </div>
            <Service></Service>
            <OurInfo></OurInfo>
            <Doctors></Doctors>
        </>
    );

};

export default Home;