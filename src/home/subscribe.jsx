import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-main">
                <div className="container">
                    <div className="subscribe-inner">
                        <div className="subscribe-border">
                            <AiOutlineMail className="mail"/>
                            <strong>Subscribe for Our Newsletter</strong>
                            <p>Learn about new offers and get more deals by joining our newsletter</p>
                            <div className="input-email">
                                <input type="email" placeholder="Enter your Email Address" size={20}/>
                                <a href="#">SUBSCRIBE<GoArrowRight className="right-arrow"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;

