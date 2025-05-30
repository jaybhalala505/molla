import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
const CustomerReviews = () => {
    return (
        <div className="review-section">
            <div className="container">
                <div className="review-section-inner">
                    <div className="review-header-text">
                        <h3 className="title">Reviews From Real Customers</h3><hr />
                    </div>

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation]}
                        slidesPerView={3}
                        navigation
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        <div className="review-section-main">
                            <SwiperSlide>
                                <div className="review-section-one">
                                    <div className="review-img">
                                        <img src="/assets/img/customer_1.webp" alt="customer_1" />
                                    </div>
                                    <div className="section-one-text">
                                        <div className="review-reat">
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                        </div>
                                        <h4>Morbi in sem quis dui placerat</h4>
                                        <p>Dolor sit amet, consectetuer adipiscing
                                            elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, dapibus</p>
                                        <span>
                                            Sakina Stout
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-section-one">
                                    <div className="review-img">
                                        <img src="/assets/img/customer_2.webp" alt="customer_2" />
                                    </div>
                                    <div className="section-one-text">
                                        <div className="review-reat">
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStarHalf style={{ color: '#cc9966' }} /></i>
                                        </div>
                                        <h4>Cras consequat</h4>
                                        <p>Phasellus hendrerit. Pellentesque aliquet
                                            nibh nec urna. In nisi neque, aliquet.</p>
                                        <cite>
                                            Maximus
                                        </cite>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review-section-one">
                                    <div className="review-img">
                                        <img src="/assets/img/customer_3.webp" alt="customer_3" />
                                    </div>
                                    <div className="section-one-text">
                                        <div className="review-reat">
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStar style={{ color: '#cc9966' }} /></i>
                                            <i className="fkt-star"><IoMdStarHalf style={{ color: '#cc9966' }} /></i>
                                        </div>
                                        <h4>Vestibulum auctor dapibus</h4>
                                        <p>Sed pretium, ligula sollicitudin laoreet
                                            viverra tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis</p>
                                        <cite>
                                            Antony Tanner
                                        </cite>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;