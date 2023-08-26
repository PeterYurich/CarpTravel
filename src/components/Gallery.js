import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, fadeEffect } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { gallery } from 'data';

export default function Gallery() {

  const { slide1, slide2, slide3 } = gallery

  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation],
  //   effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true
  //   },
  // });

  // const swiper = new Swiper('.swiper', {
  //   speed: 400,
  //   spaceBetween: 100,
  // });

  return (
    <section
      className='bg-[url("assets/img/gallery/bg_gallery.jpg")] relative
    bg-cover bg-center  p-y-section pt-[105px] flex flex-col max-w-phone
    md: min-w-full md:pt-[135px]  md:px-8
    lg:pt-[130px] lg:px-20 lg:py-20 '
    >
      <div className='min-w-0'>
        <Swiper className='swiper'
          loop={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next ',
            prevEl: '.swiper-prev ',
            clickable: true
          }}
          effect={'fade'}
          fadeEffect={
            {
                crossFade: true
            }
          }
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <img src={slide1} alt="view1" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={slide2} alt="view2" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={slide3} alt="view3" />
            </SwiperSlide>
          </div>
        </Swiper>

        <div>
          <div className="swiper-prev w-12 uppercase absolute left-80 cursor-pointer">back</div>
          <div className="swiper-next w-12 uppercase absolute right-80 cursor-pointer">next</div>
        </div>

        {/* <div class="swiper-scrollbar"></div> */}
      </div>
    </section>
  )
}
