import React from "react";
import './AdvancedCourses.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdvancedCourse = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-column align-items-center">
                        <div className="flex-container">
                            <h1 className="title">Advanced Courses.</h1>
                            <p className="description">Take your trading game to the next level.
                                Our advanced courses and videos are your rocket boosters to success!</p>
                            <button className="btn btn-primary btn-lg btn-block mt-3">
                                Explore More
                            </button>
                        </div>
                        <div className="col-sm-12 flex-container">
                            <h2 className="unlock_knowledge"><span className="span">Unlock</span> A World of Knowledge.</h2>
                            <p className="unlock_knowledge_P">Dive deep into exclusive content designed by our experts that will
                                help you to...</p>
                        </div>
                        {/* Add more sections as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedCourse;
