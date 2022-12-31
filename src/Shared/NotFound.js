import React from 'react';
import logo from "../images/404.jpg"
const NotFound = () => {
    return (
        <div className='flex justify-center item-center '>
            <h1 className='text-primary text-center'>Mechanic is Sleeping </h1>
            <img className='w-75  m-20 p-20' src={logo} alt="" />
        </div>
    );
};

export default NotFound;