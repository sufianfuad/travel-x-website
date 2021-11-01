import React from 'react';
//css
import './LatestBlogs.css';
//image
import pic1 from '../../images/blogs/pic1.jpg';
import pic2 from '../../images/blogs/pic2.jpg';
import pic4 from '../../images/blogs/pic4.jpg';
const LatestBlogs = () => {
    return (
        <div className="blog-container">
            <div className="container mt-3">
                <h6 className="text-center fw-bold title-color"> Latest Blog</h6>
                <h2 className="text-center mt-3 fw-bold travel-title mb-3">Stay Updated And New Post Our Blog</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                    {/* travelX blogs */}
                    <div className="col">
                        <div className="card h-100">
                            <img src={pic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Traveller Emerson</h5>
                                <p className="card-text">“Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                                <button className="btn book-btn">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={pic2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Traveller Mark Wings</h5>
                                <p className="card-text">“Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Mark Wings</p>
                                <button className="btn book-btn">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={pic4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Traveller Walton</h5>
                                <p className="card-text"> “There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them” – Jo Walton.</p>
                                <button className="btn book-btn">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LatestBlogs;