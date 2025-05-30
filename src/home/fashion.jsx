import React from 'react';

const Fashion = () => {
    return (
        <>
            <div className="fashion-main">
                <div className="container">
                    <div className="fashion-inner">
                        <div className="fashion-block-one">
                            <div className="fashion-block-img">
                                <img src="/assets/img/fashion_1.webp" alt="fashion_1" />
                                <div className="fashion-block-content">
                                    <span style={{ fontFamily: "Sedgwick Ave, cursive", fontSize: "30px", fontWeight: "500", lineHeight: "2" }}>SUMMER SALE</span>
                                    <span style={{ fontFamily: "Sedgwick Ave, cursive", fontSize: "15px", fontWeight: "500" }}>up to</span>
                                    <span style={{ fontFamily: "Sedgwick Ave, cursive", fontSize: "50px", fontWeight: "500", lineHeight: "1.1" }}>40% OFF</span>
                                </div>
                            </div>
                            <div className="fashion-block-img">
                                <img src="/assets/img/fashion_2.webp" alt="fashion_2" />
                                <div className="fashion-block-content">
                                    <span style={{ fontFamily: "Carter One, system-ui", fontSize: "30px", fontWeight: "500", lineHeight: "1.6" }}>Birthday</span>
                                    <span style={{ fontFamily: "Carter One, system-ui", fontSize: "46px", fontWeight: "500", lineHeight: "1.1" }}>Gift Ideas</span>
                                    <span style={{ fontFamily: "Sedgwick Ave, cursive", fontSize: "15px", fontWeight: "500", lineHeight: "2.8" }}>New releases every week</span>
                                </div>
                            </div>
                        </div>
                        <div className="fashion-block-two">
                            <div className="fashion-block-img">
                                <img src="/assets/img/fashion_3.webp" alt="fashion_3" />
                                <div className="fashion-block-content">
                                    <span>Shop Men’s</span>
                                    <span>Men’s T-shirts & Tank tops</span>
                                    <a className="shop-now">SHOP NOW</a>
                                </div>
                            </div>
                            <div className="fashion-block-img">
                                <img src="/assets/img/fashion_4.webp" alt="fashion_4" />
                                <div className="fashion-block-content">
                                    <span>Shop Women’s</span>
                                    <span>Women's T-Shirts & Tops</span>
                                    <a className="shop-now">SHOP NOW</a>
                                </div>
                            </div>
                            <div className="fashion-block-img">
                                <img src="/assets/img/fashion_5.webp" alt="fashion_5" />
                                <div className="fashion-block-content">
                                    <span>B&W Collection</span>
                                    <span>New releases every week</span>
                                    <a className="shop-now">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fashion;