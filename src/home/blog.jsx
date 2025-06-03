import React from "react";
import { GoArrowRight } from "react-icons/go";

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
    return (
        <div className="blog-section">
            <div className="container">
                <div className="blog-section-inner">
                    <div className="blog-header-text">
                        <h3 className="title">From Our Blog</h3>
                        <a href="#">VIEW MORE<GoArrowRight className="right-arrow" /></a>
                    </div>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                    >
                        <div className="blog-section-main">
                            <SwiperSlide>
                                <div className="blog-section-one">
                                    <div className="blog-img">
                                        <img src="assets/img/blog_1.webp" alt="blog_1" />
                                    </div>
                                    <div className="blog-section-one-text">
                                        <div className="blog-data">
                                            <a className="date" href="#">Jun 01, 2020</a>
                                        </div>
                                        <h2 className="entry-title">
                                            <a className="entry" href="#">Aenean dignissim felis.</a>
                                        </h2>
                                        <div className="entry-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-section-one">
                                    <div className="blog-img">
                                        <img src="assets/img/blog_2.webp" alt="blog_2" />
                                    </div>
                                    <div className="blog-section-one-text">
                                        <div className="blog-data">
                                            <a className="date" href="#">Jun 01, 2020</a>
                                        </div>
                                        <h2 className="entry-title">
                                            <a className="entry" href="#">Vestibulum auctor dapibus neque.</a>
                                        </h2>
                                        <div className="entry-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-section-one">
                                    <div className="blog-img">
                                        <img src="assets/img/blog_3.webp" alt="blog_3" />
                                    </div>
                                    <div className="blog-section-one-text">
                                        <div className="blog-data">
                                            <a className="date" href="#">Jun 01, 2020</a>
                                        </div>
                                        <h2 className="entry-title">
                                            <a className="entry" href="#">Cras ornare tristique elit.</a>
                                        </h2>
                                        <div className="entry-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-section-one">
                                    <div className="blog-img">
                                        <img src="assets/img/blog_4.webp" alt="blog_4" />
                                    </div>
                                    <div className="blog-section-one-text">
                                        <div className="blog-data">
                                            <a className="date" href="#">Jun 01, 2020</a>
                                        </div>
                                        <h2 className="entry-title">
                                            <a className="entry" href="#">Cras iaculis ultricies nulla.</a>
                                        </h2>
                                        <div className="entry-content">
                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue.</p>
                                        </div>
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

export default Blog;