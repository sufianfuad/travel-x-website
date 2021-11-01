import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner">
                    <div className="container">
                        <div className="banner-info">
                            <h2>Welcome to my Travel Agency</h2>
                            <p>
                                Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide
                            </p>
                            <button className="btn border-0 rounded-3 book-btn px-3 py-2">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
