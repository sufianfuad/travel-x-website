import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Login.css'
const Login = () => {

    const { signInUsingGoogle } = useAuth();

    //for redirect
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-container">
            <h2 className="text-center">Please Login</h2>
            <div className="text-center">
                <button
                    onClick={handleGoogleSignIn}
                    className=" btn btn-warning">Sign In With Google</button>
            </div>

        </div>
    );
};

export default Login;