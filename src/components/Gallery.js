import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { gallery } from 'data';

export default function Gallery() {

  const { title1, title2, slide1, slide2, slide3 } = gallery

  const pageWidth = document.documentElement.scrollWidth

  return (
    <section
      className='bg-[url("assets/img/gallery/bg_gallery.jpg")] relative
    bg-cover bg-center  p-y-section pt-[105px] flex flex-col max-w-phone
    md: min-w-full md:pt-[135px]  md:px-8
    lg:pt-[130px] lg:px-20 lg:py-20 '
    >
      <div className='self-center'>

        <h2 className='
        text-40 tracking-tighter
        md:text-67 md:tracking-[-2.7px] md:text-center
        lg:text-98 
        '>
          <span className='font-thin mr-8'>{title1}</span>
          <span className='font-medium'>{title2}</span>
        </h2>



        {pageWidth < 768 ?
          <div className='grid gap-y-[22px]'>
            <img src={slide1} alt="view1" className='mx-auto' />
            <img src={slide2} alt="view2" className='mx-auto' />
            <img src={slide3} alt="view3" className='mx-auto' />
          </div>

          :
          <>
            <Swiper className='swiper '
              loop={true}
              slidesPerView={'auto'}
              centeredSlides={true}
              navigation={{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next',
                clickable: true
              }}
              modules={[Navigation, EffectFade]}
            >
              <SwiperSlide className="swiper-slide">
                <img src={slide1} alt="view1" className={`mx-auto 
                ${pageWidth > 448 && pageWidth < 1280 && 'w-[458px]'}`} 
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={slide2} alt="view2" className={`mx-auto 
                ${pageWidth > 448 && pageWidth < 1280 && 'w-[458px]'}`} 
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={slide3} alt="view3" className={`mx-auto 
                ${pageWidth > 448 && pageWidth < 1280 && 'w-[458px]'}`} 
                />
              </SwiperSlide>
            </Swiper>
            
            <div>
            <div className="swiper-prev font-thin uppercase absolute z-[1000] cursor-pointer
            left-12 w-12  text-[33px] bottom-[70px] 
            lg:left-64 ">back</div>
            <div className="swiper-next font-thin uppercase absolute z-[1000] cursor-pointer
            right-[86px] w-12  text-[33px] bottom-[70px] 
           lg:right-72 ">next</div>
            </div>
          </>
        }      </div>


    </section>
  )
}
