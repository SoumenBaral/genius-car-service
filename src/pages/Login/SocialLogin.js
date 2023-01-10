import React from 'react';
import googleicon from '../../images/icon/Illustration-of-Google-icon-on-transparent-background-PNG .png'
import facebook from '../../images/icon/facebook.png'
import git from '../../images/icon/git.png'
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>{error?.message} {error1?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary '></div>
                <p className='mx-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary '></div>

            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info mx-auto d-block w-50 my-2'>
                    <img style={{ width: '50px', height: '35px' }} src={googleicon} alt="" />
                    Google Sign In</button>
                <button className='btn btn-info mx-auto d-block w-50 my-2'>
                    <img style={{ width: '30px', height: '25px' }} src={facebook} alt="" />
                    <span className='ms-2'>Facebook Sign In</span></button>
                <button onClick={() => signInWithGithub()} className='btn btn-info mx-auto d-block w-50'>
                    <img style={{ width: '30px', height: '25px' }} src={git} alt="" />
                    <span className='ms-2'>GitHub Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;