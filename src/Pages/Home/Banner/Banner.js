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
                            <button className="btn btn-primary">Read More</button>
                        </div>
                        {/* <div className="row d-flex align-items-center">
                            <div className="col-md-7">
                                <div className="banner-info text-center">
                                    <h2>Welcome to my Travel Agency</h2>
                                    <p>
                                        Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5">

                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;


{/* <div class="card text-white">
                        <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" class="card-img" alt="..." />
                        <div class="card-img-overlay  d-flex justify-content-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text banner-text">Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide</p>
                        </div>
                    </div>  */}

{/* <div className="row d-flex align-items-center h-100">
                        <div className="col-md-7">
                            <div className="banner-info">
                                <h2>Welcome to my Travel Agency</h2>
                                <p>
                                    Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">

                        </div>
                    </div> */}