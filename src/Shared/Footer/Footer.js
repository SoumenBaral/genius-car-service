import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center my-5'>
            <small>CopyRight @{year}</small>
        </div>
    );
};

export default Footer;