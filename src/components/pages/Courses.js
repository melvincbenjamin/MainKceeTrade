import React from 'react';
import './Courses.css';
import removable from '../images/3-removable.png';
const Courses = () => {
    return (
        <div container-fluid>
            <div className='row'>
               <div className='col-lg-12 master'>
                <p className='textStyleLeft'>.....</p>
                <h1 className="new-skills">Master New Skill With Trading Times.</h1>
                <p className='textStyleRight'>.....</p>
               </div>
               <div className='col-lg-12 course-goals'>
                <p>Our courses are designed to help you achieve your goals. Explore a wide range of topics, from
                    beginner to advanced levels.</p>
               </div>
               <div className='col-lg-12 get-started'>
                    <button className='btn btn-primary'>Get Started Now</button>
                    <img src={removable} alt='Removable-img' />
               </div>
               <hr style={{
                border: '1px solid #ffffff',
               }}/>
               <div className='col-lg-12 free-course'>
                <h2>Our <span>Free</span> courses.</h2>
                <p>Start  your Trading journey today with our free courses and set your sight on the advanced path to unlock your full trading potential </p>
               </div>
            </div>
            <div className='col-lg-12 get-started-now'>
                <button className='btn btn-primary'>Get Started.</button>
                <hr className='new-border' style={{
                border: '1px solid #ffffff',
               }}/>
            </div>
            <div className='col-lg-12 stepping-stone'>
                <p>Our <span className='free'>FREE </span> courses are your stepping stones to grasp the basics of trading, while our
<span className='advanced'>ADVANCED</span> courses are your ticket to mastery.</p>
            </div>
            
            <div className='col-lg-12 potential-rates'>
                <p>Enroll now and Unleash 
                Your Potential in our <span className='rates'>ADVANCED</span> Courses at a rate of <span className='rates'>$50.</span> 
                </p>
                <div className='row'>
                <div className='col-lg-12 text-center'>
                <button className='btn-md center-block' id='first-button'>Enroll Now.</button>
               <button className='btn-md center-block' id='second-button'>Stay Connected</button>
            </div>
            </div>
            </div>
            
            <div className='col-lg-12 mentorship'>
                <p>Join our exclusive one-on-one mentorship sessions with our professional traders. Receive personalized guidance, in-depth strategies, live trading and real-time support, ensuring your trading success.</p>
            </div>
            <div className='col-lg-12 get-started-now2'>
                <button className='btn btn-primary'>Get Started.</button>
                <hr style={{ 
                border: '1px solid #FFFFFF',
               }}/>
            </div>
        </div>
    )
}

export default Courses;