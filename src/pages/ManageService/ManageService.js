import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices()
    const handleDelete = id => {
        console.log('confirm', id);
        const proceed = window.confirm('are You Sure');
        if (proceed) {
            const url = `https://geniuscar.onrender.com/service/${id}`
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Your Service</h2>
            {
                services.map(service => <div key={service._id}>
                    <h6>Name: {service.name} <button onClick={() => handleDelete(service._id)}>X</button></h6>


                </div>)
            }
        </div>
    );
};

export default ManageService;