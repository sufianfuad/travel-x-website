import React from 'react';
import './NotFound.css';
import errorImage from '../../images/error/error.jpg'
const NotFound = () => {
    return (
        <div className="error-container">
            <div className="error-image text-center">
                <img className="img-fluid" src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default NotFound;