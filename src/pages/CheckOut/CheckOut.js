import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import useServiceDetail from '../../Hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail()
    const [user] = useAuthState(auth);




    // const [user, setUser] = useState({
    //     name: 'Akbor ali',
    //     email: 'akbor@mono.taj',
    //     address: 'Tajmohol Road md.Pur',
    //     phone: '017111111111'

    // });

    // const handleAddressChange = e => {
    //     console.log();
    //     const { address, ...rest } = user;
    //     console.log(address, rest);
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest }
    //     setUser(newUser)
    // }
    const handleSubmit = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://geniuscar.onrender.com/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Thanks For place Your order')
                    event.target.reset()
                }
            })

    }




    return (
        <div className='w-50 mx-auto'>

            <h2>Place Order:  {service.name} </h2>
            <form onSubmit={handleSubmit}>
                <input className='w-100 mb-2' readOnly value={user?.displayName} type="text" name='name' placeholder='Name' required /><br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' disabled readOnly placeholder='Enter your Email' required /><br />
                <input className='w-100 mb-2' readOnly type="text" name='service' value={service.name} placeholder='service' required /><br />
                <input className='w-100 mb-2' type="text" name='address'
                    autoComplete='off' placeholder='address' required /><br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required /><br />
                <input className='btn btn-primary' type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default CheckOut;