import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='d-flex align-items-center justify-content-center'>
            <div>
                <h2 className='text-danger '>Your Email is not Verified  </h2>
                <h4 className='text-success'>Please Verify Your Email</h4>
                <div className='text-center'><button
                    onClick={async () => {
                        const success = await sendEmailVerification();
                        if (success) {
                            alert('Sent email');
                        }
                    }}
                >
                    Verify email
                </button></div>

            </div>
        </div>
    }
    return children;
};

export default RequireAuth;