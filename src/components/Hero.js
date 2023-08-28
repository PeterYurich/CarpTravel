import React from 'react'
import { hero } from 'data'
import { BtnJoin } from 'components'


export default function Hero() {
    const { titlePart1, titlePart2, titlePart3,
        heroTxt1, heroTxt2, heroTxt3, subtitle1, subtitle2, description,
        btnText, } = hero

    const subtitleJoined = subtitle1 + subtitle2
    const pageWidth = document.documentElement.scrollWidth

    return (
        <section className='bg-[url("assets/img/hero/bg_hero.png")] 
        bg-cover bg-center px-5 pb-[56px] pt-[105px] flex flex-col max-w-phone
        md: min-w-full md:pt-[135px]  md:px-8
        lg:pt-[130px] lg:px-20 lg:py-20
        '>
            <div className='self-center px-5
            md:relative md:w-full md:block md:max-w-tab
            lg:max-w-pc
            '>
                <h2 className='uppercase text-right flex flex-col mb-6
                 md:absolute right-0 '>
                    <p className='text-[37px] track -mb-4  tracking-[1.7px] 
                    md:text-[67px] md:-mb-6 md:tracking-[8.7px] 
                    lg:text-[98px] lg:tracking-tight lg:-mb-9 
                    '>
                        <span className='font-medium mr-1 '>{titlePart1}</span>
                        <span className='font-thin'>{titlePart2}</span>
                    </p>
                    <p className='font-light tracking-[10px] leading-loose text-[12px] translate-x-1
                    md:text-[14px] md:tracking-[27px] md:translate-x-2
                    lg:text-[16px] lg:tracking-[33px] lg:translate-x-6
                    '>
                        {titlePart3}
                    </p>
                </h2>

                <h1 className='text-[40px] uppercase text-left mb-6
                md:text-[67px] md:tracking-[-2.6px] md:mb-[68px]
                lg:text-[98px] lg:tracking-[-3.9px] lg:mb-[148px]
                '>
                    <p className='font-medium'>{heroTxt1}</p>
                    <p className='font-thin'>{heroTxt2}</p>
                    <p className='font-thin'>{heroTxt3}</p>
                </h1>

                {pageWidth < 1280 ?
                    <p className='mb-6 text-[10px] font-extralight tracking-[1.7px]
                    md:text-[14px]  md:tracking-[1.3px] md:mb-0
                    '>
                        <span className='block'>{subtitle1}</span>
                        <span className='block'>{subtitle2}</span>
                    </p>
                    :
                    <p className='font-extralight text-[16px] tracking-[1.5px]'>
                        {subtitleJoined}
                    </p>
                }
                <p className='text-[14px] font-extralight mb-6 text-justify
                md:absolute md:top-36 md:right-0 md:w-[230px] md:text-[16px]  
                lg:top-[380px] lg:w-[294px] lg:text-[18px]
                '>
                    {description}
                </p>
                <BtnJoin btnText={btnText}/>
                {/* <img src="assets/img/hero/Backgroundbg1.png" style={{width: '100px', height: '100px'}} alt='alt'></img>
                <svg style={{width: '100px', height: '100px'}}>
                    <use href="assets/img/hero/left-mob-frame.png"></use>
                </svg> */}
            </div>
        </section>
    )
}