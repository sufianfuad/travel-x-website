import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// useAuth
import useAuth from '../../../hooks/useAuth';
//logo image
import googleLogo from '../../../images/logo/google.png';
//css
import './Login.css'
const Login = () => {

    const { signInUsingGoogle } = useAuth();

    //for redirect
    const location = useLocation();
    const history = useHistory();
    //Redirect
    const redirect_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-container">
            <div className="login-info p-3">
                <h2 className="text-center">Please Login</h2>
                <div className="ggl-logo p-2">
                    <img src={googleLogo} alt="" />
                </div>
                <div className="mt-2">
                    <button
                        onClick={handleGoogleSignIn}
                        className=" btn login-btn px-3 py-2">Sign In With Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;