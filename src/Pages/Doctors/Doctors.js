import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Doctors.css'

const Doctors = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <>

            <div className="service  doctor-section">
                <h4>━━━━ Our Specialist</h4>
                <h2>Doctors</h2>
                <div className="all-data">

                    {
                        data.map(d => <div className="single-data" d={d}
                            key={d.id}>

                            <img src={d.img} alt="" />
                            <h3>{d.name}</h3>
                            <p>{d.description}</p>
                            <NavLink to="/" activeClassName="selected">
                                <button className="details-btn">Books Doctor</button>
                            </NavLink>


                        </div>)
                    }
                </div>
            </div>
        </>

    );
};

export default Doctors;