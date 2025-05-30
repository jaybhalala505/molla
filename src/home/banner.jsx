import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="banner-main">
                        <img src="assets/img/banner_bg_1.webp" alt="banner_bg_1" />
                        <div className="container">
                            <div className="banner-inner">
                                <div className="banner-content">
                                    <span>SEASONAL PICKS</span>
                                    <span style={{ fontFamily: "Modak, system-ui" }}>GET ALL <br />THE GOOD <br />STUFF</span>
                                    <a href="#">DISCOVER NOW<RiArrowRightSLine className='banner-arrow' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-main">
                        <img src="assets/img/banner_bg_2.webp" alt="banner_bg_1" />
                        <div className="container">
                            <div className="banner-inner">
                                <div className="banner-content">
                                    <span>FEATURED PRODUCTS</span>
                                    <span style={{ fontFamily: "Modak, system-ui" }}>ORGANIC & <br />FAIRTRADE <br />COTTON</span>
                                    <a href="#">DISCOVER NOW<RiArrowRightSLine className='banner-arrow' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default Banner;

