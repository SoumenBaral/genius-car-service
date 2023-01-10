import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../../Shared/Loading/Loading'
import auth from '../../Firebase.init'
import SocialLogin from "./SocialLogin";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import useToken from "../../Hooks/useToken";
const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [token] = useToken(user)
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    if (token) {
        navigate('/')
    }
    if (loading || updating || sending) {
        return <Loading></Loading>
    }
    const handleSubmit = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
        const success = await sendEmailVerification()
        if (success) {
            alert('verify Your Mail first')
        }
    }

    return (

        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Register</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary ' : 'ps-2 text-danger'} htmlFor="term"> Accepts Terms and Condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="term"> Accepts Terms and Condition</label>
                <Button
                    disabled={!agree}
                    className='btn btn-info mx-auto d-block w-50 my-2 text-white mb-2'
                    variant="primary"
                    type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an Account <Link to={'/login'} className='text-danger text-decoration-none' >Login here</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;