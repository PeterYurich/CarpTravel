import React from 'react'
import { hero } from 'data'
import { BtnJoin } from 'components'


export default function Hero() {
    const { titlePart1, titlePart2, titlePart3,
        heroTxt1, heroTxt2, heroTxt3, subtitle1, subtitle2, description,
        btnText,  } = hero

    const subtitleJoined = subtitle1 + subtitle2
    const pageWidth = document.documentElement.scrollWidth

    return (
        <section className='bg-[url("assets/img/hero/Backgroundbg1.png")] 
        bg-cover bg-center  p-y-section pt-[105px] flex flex-col max-w-phone
        md: min-w-full md:pt-[135px]  md:px-8
        '>
            <div className='self-center px-5
            md:relative md:w-full md:block md:max-w-tab'>
                <h2 className='uppercase text-right flex flex-col mb-6
                 md:absolute right-0 '>
                    <p className='text-37 track -mb-3  tracking-[1.7px] 
                    md:text-67 md:-mb-5 md:tracking-[8.7px] '>
                        <span className='font-medium mr-1 '>{titlePart1}</span>
                        <span className='font-thin'>{titlePart2}</span>
                    </p>
                    <p className='font-light tracking-[9.5px] leading-loose text-12
                    md:text-14 md:tracking-[25.4px] '> {titlePart3} </p>
                </h2>

                <h1 className='text-40 uppercase text-left mb-6
                md:text-67 md:tracking-[-2.6px] md:mb-[68px]
                '>
                    <p className='font-medium'>{heroTxt1}</p>
                    <p className='font-thin'>{heroTxt2}</p>
                    <p className='font-thin'>{heroTxt3}</p>
                </h1>

                {pageWidth < 1280 ?
                    <p className='mb-6 text-10 font-extralight
                    md:text-14 tracking-[1.7px] md:tracking-[1.3px]
                    '>
                        <div>{subtitle1}</div>
                        <div>{subtitle2}</div>
                    </p>
                    :
                    <p className='mb-6 text-10 font-extralight'>
                        {subtitleJoined}
                    </p>
                }
                <p className='text-14 font-extralight mb-6
                md:absolute md:top-36 right-0 w-[230px] md:text-16 text-justify '>
                    {description}
                </p>
                <BtnJoin btnText={btnText} />
                {/* <img src="assets/img/hero/Backgroundbg1.png" style={{width: '100px', height: '100px'}} alt='alt'></img>
                <svg style={{width: '100px', height: '100px'}}>
                    <use href="assets/img/hero/left-mob-frame.png"></use>
                </svg> */}

            </div>
        </section>
    )
}