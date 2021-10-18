import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'

const Service = () => {



    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <>

            <div className="service">
                <h4>━━━━ OUR DEPARTMENTS</h4>
                <h2>Our Medical Services</h2>
                <div className="all-data">

                    {
                        data.map(d => <div className="single-data" d={d}
                            key={d.id}>

                            <img src={d.img} alt="" />
                            <h3>{d.name}</h3>
                            <p>{d.description}</p>

                            <NavLink to={`/services/${d.id}`} activeClassName="selected">
                                <button className="details-btn">Service Details</button>
                            </NavLink>


                        </div>)
                    }
                </div>
            </div>
        </>

    );
};

export default Service;