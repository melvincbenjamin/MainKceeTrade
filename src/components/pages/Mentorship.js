import React from "react";
import './Mentorship.css';
import Monthly from "./Monthly";

const Mentorship = () => {
    return <div>
        <div className="container mentorship">
            <h1>MENTORSHIP</h1>
        </div>
        <div style={{
            background: '#000235'
        }}>
            <div className="offers">
                <p>Our Mentorship plans offers a structured and comprehensive approach to Trading, ensuring that you gain the skills and knowledge needed to thrive in the market.
                Whether you're just beginning your Forex journey or looking to enhance your trading strategies, this plans are designed to provide you with the guidance, resources, and practical experience essential for success.</p>
                <button className="explore-more">Explore More</button>
            </div>
            <div className="enroll-now">
                <p>Enroll now to Kickstart your dream of becoming a proficient and profitable Forex trader.
                    Your journey to mastering the Financial Market starts here!</p>
                <button className="enroll">Explore More</button>
            </div>
            <hr className="horizontal-line" style={{
                textAlign: 'center'
            }}/>
            <Monthly />
        </div>
    </div>
};
export default Mentorship