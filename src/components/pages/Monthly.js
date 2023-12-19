import React from "react";
import './Monthly.css';
import Rectangle92 from '../images/Rectangle 92.png';

const Monthly = () => {
    return <div>
        <div className="monthly-plans">
                <h2>MONTHLY PLAN</h2>
            </div>
            <div>
            <div className="first-pic">
                <img src={Rectangle92} alt="Rectangle pic" />
                <p className="month-mentorship">1 MONTH MENTORSHIP.</p>
                <p className="full-access">
                    Full access to our trading resources and beginner courses.
                    Personalized Coaching
                    Technical and Fundamental Analysis
                    Trading Tools and Software
                    Access to Live Trading Webinars</p>
                <p className="leave-a-rating">Leave a rating</p>
                <p className="prize">($80)</p>
            </div>
            <div className="first-pic">
                <img src={Rectangle92} alt="Rectangle pic" />
                <p className="month-mentorship">1 MONTH MENTORSHIP.</p>
                <p className="full-access">
                    Full access to our trading resources and beginner courses.
                    Personalized Coaching
                    Technical and Fundamental Analysis
                    Trading Tools and Software
                    Access to Live Trading Webinars</p>
                <p className="leave-a-rating">Leave a rating</p>
                <p className="prize">($80)</p>
            </div>
            
            </div>
    </div>
};
export default Monthly;