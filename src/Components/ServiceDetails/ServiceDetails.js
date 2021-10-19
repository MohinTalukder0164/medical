import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ServiceDetails.css'

const ServiceDetails = () => {


    const { id } = useParams()

    const [data, setData] = useState([]);
    const [service, setService] = useState({});


    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        const found = data.find(d => d.id === id);
        setService(found)
    }, [data])

    return (
        <Container >
            <div className="all-data font">
                <div className="single-data details-data" >
                    <div>
                        <img src={service?.img} alt="" />
                        <h2>{service?.name}</h2>
                        <p>{service?.description}</p>
                        <button className="btn-primary service-details-btn px-3 my-3">{service?.Price}</button>
                        <br />
                        <button className="btn-primary buy-btn px-3 my-3">Book this</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ServiceDetails;