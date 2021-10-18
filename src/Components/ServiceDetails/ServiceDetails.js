import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const { id } = useParams()

    return (
        <div className="font">
            <h2>This is Service Details {id}</h2>
        </div>
    );
};

export default ServiceDetails;