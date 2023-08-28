import React from 'react'
import styles from "components/BtnJoin/btnJoin.module.scss"

export default function BtnJoin({ btnText }) {
    return (
        <a  href="#contacts">
            <button
                className={` w-full p-[15px] uppercase font-medium bg-primary bg-opacity-[5%]
                    hover:bg-opacity-20 transition-all relative
                    md:w-[230px] md:p-[14px] md:absolute right-0 bottom-0 md:text-[18px]
                    lg:w-[294px] lg:text-[32px] lg:p-[16px] lg:py-[12px]
                    ${styles.button} `}
            >
                {btnText}
                {/* <svg style={{width: '100px', height: '100px', color: 'red'}}>
                    <use href="../../assets/img/hero/left-mob-frame.png" ></use>
                </svg> */}
            </button>
        </a>
    )
}
