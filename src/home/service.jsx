import React from "react";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdOutlineRotateLeft, MdOutlineHeadset } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

const Service = () => {
    return (
        <div className="service-main">
            <div className="container">
                <div className="service-inner">

                    <Swiper
                        // install Swiper modules
                        modules={[Scrollbar]}
                        slidesPerView={4}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        <div className="service-block">
                            <SwiperSlide>
                                <div className="services">
                                    <div className="service-icon">
                                        <a href="#"><LiaTruckMovingSolid /></a>
                                    </div>
                                    <div className="service-content">
                                        <a href="#">
                                            <h3>Payment & Delivery</h3>
                                            <span>Free shipping for orders over $50</span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services">
                                    <div className="service-icon">
                                        <a href="#"><MdOutlineRotateLeft /></a>
                                    </div>
                                    <div className="service-content">
                                        <a href="#">
                                            <h3>Return & Refund</h3>
                                            <span>Free 100% money back guarantee</span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services">
                                    <div className="service-icon">
                                        <a href="#"><MdOutlineHeadset /></a>
                                    </div>
                                    <div className="service-content">
                                        <a href="#">
                                            <h3>Quality Support</h3>
                                            <span>Alway online feedback 24/7</span>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services">
                                    <div className="service-icon">
                                        <a href="#"><AiOutlineMail /></a>
                                    </div>
                                    <div className="service-content">
                                        <a href="#">
                                            <h3>Join Our Newsletter</h3>
                                            <span>10% off by subscribing to our newsletter</span>
                                        </a>
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

export default Service;