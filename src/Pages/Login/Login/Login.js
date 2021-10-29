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
            <h2>Please Login</h2>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-warning">Sign In With Google</button>
        </div>
    );
};

export default Login;