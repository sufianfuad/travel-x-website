import React from 'react';
import './About.css';
import img1 from '../../images/agency/img-1.jpg';
import img2 from '../../images/agency/img-2.jpg';
import img3 from '../../images/agency/img-3.jpg';
import img4 from '../../images/agency/img-4.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="tavel-container">
            <h6 className="text-center fw-bold">Why TourX</h6>
            <h2 className="text-center mt-3 fw-bold travel-title">Why You Are Travel With TravelX</h2>
            <div className="travelX-details container mt-5">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="travelX-card shadow-sm m-2">
                            <div className="travelX-info p-3">
                                <div className="travelX-logo">
                                    <img className="w-50 mb-2" src={img1} alt="" />
                                </div>
                                <div>
                                    <h4 className="text">1000+ Our worldwide guide</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="travelX-card shadow-sm m-2">
                            <div className="travelX-info p-3">
                                <div className="travelX-logo">
                                    <img className="w-50 mb-2" src={img2} alt="" />
                                </div>
                                <div>
                                    <h4 className="text">90% of our traveller happy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="travelX-card shadow-sm m-2">
                            <div className="travelX-info p-3">
                                <div className="travelX-logo">
                                    <img className="w-50 mb-2" src={img3} alt="" />
                                </div>
                                <div>
                                    <h4 className="text">
                                        100% trusted travel agency
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="travelX-card shadow-sm m-2">
                            <div className="travelX-info p-3">
                                <div className="travelX-logo">
                                    <img className="w-50 mb-2" src={img4} alt="" />
                                </div>
                                <div>
                                    <h4 className="text">
                                        5+ year of travel experience
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;