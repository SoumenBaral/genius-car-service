import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, price, description, img } = service
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div>

            <div className='service'>
                <img src={img} alt="" />
                <h2>Name: {name}</h2>
                <p><small>{description}</small></p>
                <p>Price: ${price}</p>
                <button onClick={() => navigateToServiceDetail(_id)}>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;