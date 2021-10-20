import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [doctors, setDoctors] = useState({});

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        const found = data.find(d => d.id === id);
        setDoctors(found);
    }, [data]);


    return (
        <Container >
            <div className="all-data font">
                <div className="single-data details-data" >
                    <div>
                        <img src={doctors?.img} alt="" />
                        <h2>{doctors?.name}</h2>
                        <p>{doctors?.description}</p>

                        <br />
                        <button className="btn-primary buy-btn px-3 my-3">Book this</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DoctorDetails;