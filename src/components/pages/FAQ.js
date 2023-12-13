import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{
            backgroundColor: '#000235',
            width: '100%',
            height: '730px'
        }}>
            <div className="container">
                <h1 className="text-center questions" style={{
                    marginTop: '40px'
                }}>FREQUENTLY ASKED QUESTIONS!</h1>
            </div>
            <div className="container">
                <div className="accordion" style={{
                    marginTop: '50px'
                }}>
                    <div className="accordion-item">
                        <p className="accordion-title" style={{
                            marginLeft: '20px',
                            paddingTop: '20px'
                        }} onClick={() => toggleAccordion(1)}>
                            Accordion item #1 <FontAwesomeIcon icon={faChevronDown} className={activeIndex === 1 ? 'chevron-active' : 'chevron'} />
                        </p>
                        {activeIndex === 1 && (
                            <div className="accordion-content">
                                Content for Accordion item #1
                            </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <p className="accordion-title" style={{
                            marginLeft: '20px',
                            paddingTop: '20px'
                        }} onClick={() => toggleAccordion(2)}>
                            Accordion item #2 <FontAwesomeIcon icon={faChevronDown} className={activeIndex === 2 ? 'chevron-active' : 'chevron'} />
                        </p>
                        {activeIndex === 2 && (
                            <div className="accordion-content">
                                Content for Accordion item #2
                            </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <p className="accordion-title" style={{
                            marginLeft: '20px',
                            paddingTop: '20px'
                        }} onClick={() => toggleAccordion(3)}>
                            Accordion item #3 <FontAwesomeIcon icon={faChevronDown} className={activeIndex === 3 ? 'chevron-active' : 'chevron'} />
                        </p>
                        {activeIndex === 3 && (
                            <div className="accordion-content">
                                Content for Accordion item #3
                            </div>
                        )}
                    </div>
                    <div className="accordion-item">
                        <p className="accordion-title" style={{
                            marginLeft: '20px',
                            paddingTop: '20px'
                        }} onClick={() => toggleAccordion(3)}>
                            Accordion item #4 <FontAwesomeIcon icon={faChevronDown} className={activeIndex === 3 ? 'chevron-active' : 'chevron'} />
                        </p>
                        {activeIndex === 4 && (
                            <div className="accordion-content">
                                Content for Accordion item #4
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FAQ;
