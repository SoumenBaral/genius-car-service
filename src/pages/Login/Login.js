
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)

    let errorElement;
    const handleSubmit = async event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        toast('my first toast is ready to Published')
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://geniuscar.onrender.com/login', { email })
        localStorage.setItem('accessToken', data?.accessToken)

    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        const success = await sendPasswordResetEmail(email);
        if (success) {
            alert('Sent email');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please LogIn </h1>
            <PageTitle title='Login'></PageTitle>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='btn btn-info mx-auto d-block w-50 my-2 text-white mb-2' variant="primary" type="submit">
                    Log IN.
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car Service <Link to={'/signup'} className='text-danger text-decoration-none' >Register Here</Link>
            </p>
            <p> <span onClick={() => toast('ami valo nai toast kaj kore nai')}> Forget Password?</span>  <Link onClick={handleResetPassword}
                className='text-primary text-decoration-none pe-auto'  > Reset Password</Link>
            </p>

            <SocialLogin></SocialLogin>

        </div >
    );
};

export default Login;