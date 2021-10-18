import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const ServiceDetails = () => {

    const { id } = useParams()
    // useEffect(() => {

    //     fetch('service.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    // }, [])

    return (
        <div className="font">
            <h2>This is Service Details {id}</h2>
        </div>
    );
};

export default ServiceDetails;