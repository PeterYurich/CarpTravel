import React from 'react'
import PropTypes from 'prop-types'

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

TitleSection.propTypes = {
    thinPart: PropTypes.string,
    boldPart: PropTypes.string
}