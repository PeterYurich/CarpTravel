import React from 'react'
import { services } from 'data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TitleSection } from 'components'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css/effect-fade';
import 'swiper/css';


export default function Services() {

  const { title1, title2, activities, offers } = services

  return (
    <section>
      <div className='self-center relative'>

        <div className="z-10 absolute left-5 top-[54px] ">
          <TitleSection thinPart={title1} boldPart={title2} />
        </div>

        <Swiper className='swiper'
          loop={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
            clickable: true
          }}
          modules={[Navigation, EffectFade]}
          effect='fade'
        >
          {offers.map(offer => (
            <SwiperSlide key={offer.id} >
              <img src={offer.bgPic} className='absolute -z-10 h-full object-cover' alt="background" />
              <article className={`
              bg-cover bg-center px-5 pb-[56px] pt-[134px] flex flex-col max-w-phone
              md: min-w-full md:pt-[135px] md:px-8
              lg:pt-[130px] lg:px-20 lg:py-20
              `}>
                <p className='mb-4 text-[43px] text-right'>
                  <span className='font-thin'>{offer.day}/</span>
                  <span className='font-thin opacity-20'>{offer.month}</span>
                </p>
                <img src={offer.picture} alt="activity" className='mb-4' />
                <p className='mb-6 text-[12px] tracking-[2.4px] font-extralight text-right'>{offer.message}</p>
                <ul className='mb-[34px] uppercase w-44 leading-5'>
                  {activities.map(item => (
                    <li className={`
                    mb-3 text-[20px] font-extralight opacity-50
                    ${offer.activity === item.name && "opacity-100 font-medium "}
                    `} key={item.id}>{item.name}</li>
                  ))}
                </ul>
                <p className='text-[14px] font-extralight leading-[20px]' >{offer.description}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
