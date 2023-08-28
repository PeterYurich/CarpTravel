import React from 'react'

export default function TitleSection({thinPart, boldPart}) {
    return (
        <h2 className='
        text-[40px] tracking-[-1.6px]
        md:text-[67px] md:tracking-[-2.7px] md:text-center
        lg:text-[98px] 
        '>
            <span className='font-thin mr-8'>{thinPart}</span>
            <span className='font-medium'>{boldPart}</span>
        </h2>
    )
}
