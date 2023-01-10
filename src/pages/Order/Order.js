import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../Firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getOder = async () => {
            const email = user.email;
            try {
                const url = `https://geniuscar.onrender.com/order?email=${email}`
                const { data } = await axiosPrivate.get(url)
                setOrder(data)
            }
            catch (error) {
                console.error(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOder()
    }, [user])
    return (
        <div>
            <h2>Your Orders {order.length}</h2>
        </div>
    );
};

export default Order;