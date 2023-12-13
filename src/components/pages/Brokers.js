import React from "react";
import './Brokers.css';

const Brokers = () => {
    return (
        <div className="flex-container position-relative">
            <div className="row">
                <div className="col">
                    <h1 className="text-center my-5 custom-h1">
                        To Enjoy Trading..
                    </h1>
                    <p className="text-center my-5 custom-p">Trade with our Recommended broker (EXNESS)</p>
                    <button className="custom-button">Exness</button>
                </div>
            </div>
        <div className="second" style={{
            backgroundColor: '#000235',
        }}>
            <div className="container">
            <div className="row">
                <div className="col">
                    <p className="my-3 my-md-5 reputation">Exness is a reputable online broker that has gained widespread recognition in the world of forex and financial trading. With a track record of trustworthiness and innovation, Exness provides a user-friendly platform for traders of all levels.</p>
                    <p className="my-3 my-md-5 diverse-range">Offering a diverse range of trading instruments, competitive spreads, and efficient execution,Exness empowers traders to access global financial markets with ease.</p>
                    <p className="my-3 my-md-5 commitment">Their commitment to transparency and security makes them a trusted choice for those seeking a reliable trading partner.</p>
                    <p className="my-3 my-md-5 dedicated">Exness is dedicated to helping you achieve your financial goals.</p> 
                    <p className="my-3 my-md-5 exness">Join Exness today and embark on your trading journey with confidence.</p>
                    <h3 className="my-3 my-md-5 trade-with-exness">TRADE WITH EXNESS</h3> 
                </div>
            </div>
        </div>
            <button className="custom-button2">Exness</button>
        </div>    
        </div>
    );
};

export default Brokers;
