import React from "react";
import axios from "axios";
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
    const getData = () => {
        return axios.get('https://intense-journey-23599.herokuapp.com/api/bestSellingProd')
    }
    const [data, getdatafromApi] = React.useState([]);

    React.useEffect(() => {
        getData().then((res) => getdatafromApi(res.data));
    }, []);
    console.log(data);
    return (
        <>
            <h1 className="bestSellingPrd_sliderh1">Best Selling Product</h1>
            <div className="bestSellingPrd_slider">
                <Swiper
                    spaceBetween={4}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((item) => (
                        <>
                            <SwiperSlide className="bestSellingPrd_slider2" key={item.id}>
                                <img src={item.image}></img>
                                {item.name} <br></br>
                            </SwiperSlide>
                        </>

                    ))}
                </Swiper >
            </div>
        </>
    )
}


const NewArrivals = () => {
    const getData = () => {
        return axios.get('https://intense-journey-23599.herokuapp.com/api/home')
    }
    const [data, getdatafromApi] = React.useState([]);

    React.useEffect(() => {
        getData().then((res) => getdatafromApi(res.data));
    }, []);
    console.log(data);
    return (
        <>
            <h1 className="NewArrivals_sliderh1">New Arrivals</h1>
            <div className="NewArrivals_slider">
                <Swiper
                    spaceBetween={4}
                    slidesPerView={4}

                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data.map((item) => (
                        <>
                            <SwiperSlide className="NewArrivals_slider2" key={item.id}>
                                <img src={item.image}></img>
                            </SwiperSlide>
                        </>

                    ))}
                </Swiper >
            </div>
        </>
    )
}





export { SwiperFunc, BestSellingProduct, NewArrivals }
