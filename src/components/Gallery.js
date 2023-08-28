import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { gallery } from 'data';

export default function Gallery() {

  const { title1, title2, pictures } = gallery

  const pageWidth = document.documentElement.scrollWidth

  return (
    <section
      className='bg-[url("assets/img/gallery/bg_gallery.jpg")] relative
    bg-cover bg-center  px-5 pb-[56px] pt-[105px] flex flex-col max-w-phone
    md: min-w-full md:pt-[135px]  md:px-8
    lg:pt-[130px] lg:px-20 lg:py-20 '
    >
      <div className='self-center'>

        <h2 className='
        text-[40px] tracking-tighter
        md:text-[67px] md:tracking-[-2.7px] md:text-center
        lg:text-[98px] 
        '>
          <span className='font-thin mr-8'>{title1}</span>
          <span className='font-medium'>{title2}</span>
        </h2>

        {pageWidth < 768 ?
          <div className='grid gap-y-[22px]'>
            {pictures.map(slide => (
              <img src={slide.picture} alt="view" key={slide.id} />
            ))}
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
              modules={[Navigation, EffectCoverflow]}
              effect='coverflow'
              coverflowEffect={{
                stretch: 0,
                scale: 0.1,
                rotate: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {pictures.map(slide => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <img src={slide.picture} alt="view" className={`mx-auto 
                ${pageWidth > 448 && pageWidth < 1280 && 'w-[458px]'}`}
                  />
                </SwiperSlide>
              ))}
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
