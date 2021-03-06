import React from 'react'
import './carousel.scss'
import { carousel01, carousel02, carousel03, carousel04, carousel05 } from '../../components/carousel/imports'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

SwiperCore.use([Navigation]);

const Carousel = () => {
  return (
    <div className='hero__menu section__padding'>
      <div className="hero__menu-tittle" id='catalog'>
        <p>MENU</p>
      </div>
      <Swiper
        centeredSlides={true}
        loop={true}
        loopedSlides={100}
        navigation={true}
        breakpoints={{
          "576": {
            "slidesPerView": 3,
            "spaceBetween": 0
          },
          "992": {
            "slidesPerView": 5,
            "spaceBetween": 0
          },
          "1200": {
            "slidesPerView": 7,
            "spaceBetween": 0
          }
        }}
      >
        <SwiperSlide>
          <div className="hero__menu-carousel">
            <img src={carousel01} alt="carousel" />
            <p>SUPER FAMILY HCC</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__menu-carousel">
            <img src={carousel02} alt="carousel" />
            <p>9 PCS WINGS BUCKET</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__menu-carousel">
            <img src={carousel03} alt="carousel" />
            <p>WINGS BUCKET</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__menu-carousel">
            <img src={carousel04} alt="carousel" />
            <p>WINGER COMBO BBQ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__menu-carousel">
            <img src={carousel05} alt="carousel" />
            <p>SNACK BUCKET 1</p>
          </div>
        </SwiperSlide>
        {/* <RiArrowLeftSLine size={48} color='#F73D27' />
      <img src={carousel01} alt="carousel01" />
      <img src={carousel02} alt="carousel02" />
      <img src={carousel03} alt="carousel03" />
      <img src={carousel04} alt="carousel04" />
      <img src={carousel05} alt="carousel05" />
      <RiArrowRightSLine size={48} color='#F73D27' /> */}
      </Swiper>
    </div>
  )
}

export default Carousel
