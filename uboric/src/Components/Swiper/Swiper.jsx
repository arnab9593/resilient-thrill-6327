import React from "react";
import './swiper.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperFunc = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="swip">Men's Fashion</SwiperSlide>
            <SwiperSlide className="swip">Shirt & boxer</SwiperSlide>
            <SwiperSlide className="swip">T-shirt</SwiperSlide>
            <SwiperSlide className="swip">Trunk & Briefs</SwiperSlide>
            <SwiperSlide className="swip">Women's Fashion</SwiperSlide>
            <SwiperSlide className="swip">Western Wear</SwiperSlide>
            <SwiperSlide className="swip">TUNICS</SwiperSlide>
            <SwiperSlide className="swip">Dresses</SwiperSlide>
            <SwiperSlide className="swip">Daywear</SwiperSlide>
            <SwiperSlide className="swip">Jeans</SwiperSlide>
            <SwiperSlide className="swip">Essentials & Nightwear</SwiperSlide>
        </Swiper >
    )
}

const BestSellingProduct = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="swip">Men's Fashion</SwiperSlide>
            <SwiperSlide className="swip">Shirt & boxer</SwiperSlide>
            <SwiperSlide className="swip">T-shirt</SwiperSlide>
            <SwiperSlide className="swip">Trunk & Briefs</SwiperSlide>
            <SwiperSlide className="swip">Women's Fashion</SwiperSlide>
            <SwiperSlide className="swip">Western Wear</SwiperSlide>
            <SwiperSlide className="swip">TUNICS</SwiperSlide>
            <SwiperSlide className="swip">Dresses</SwiperSlide>
            <SwiperSlide className="swip">Daywear</SwiperSlide>
            <SwiperSlide className="swip">Jeans</SwiperSlide>
            <SwiperSlide className="swip">Essentials & Nightwear</SwiperSlide>
        </Swiper >
    )
}

export { SwiperFunc, BestSellingProduct }
