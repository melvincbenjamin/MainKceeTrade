import React from "react";
import './AdvancedCourses.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Rectangle from '../images/Rectangle 54.png';

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
                        
                        <div className="real-background">
                        <div className="col-sm-12 container">
                            <h2 className="unlock-knowledge"><span>Unlock</span>  A World of Knowledge.</h2>
                            <p className="unlock-knowledge-p">Dive deep into exclusive content designed by our experts that will
                                help you to...</p>
                        </div>

                        <div className="col-lg-12  container-fluid ">
                            <img src={Rectangle} alt="Rectangle54" style={{
                                width: '100%',
                                height: 'auto',
                                marginTop: '30px'
                            }}></img>
                        </div>
                        <div className="col-lg-12 container cards" 
                        style={{display: 'flex',
                        textAlign: 'center'
                        }}>
                            <p className="master-advanced">1...“Master advanced strategies and techniques that will multiply your trading profits.”</p>
                            <p className="gain-insight">2..“Gain insights that will make you a more confident and profitable trader.”</p>
                        </div>
                        <div>
                        <p className="another-interest">Another interesting part is, you're not just investing in education; you're also securing your future
                                with our premium signals, therefore you trade with us while you learn.</p>
                        </div>
                        <div className="col-lg-12" id="community-knowledge">
                            <p>Join the community today, and gain access to a wealth of knowledge, strategies, and premium signals that will transform your trading journey.
                                Your success is our mission, and with our advanced courses and signals, you're destined for greatness. Register for our advanced courses and be eligible for premium signals that will take your trading to the next level. Your path to financial freedom starts here!"</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedCourse;
