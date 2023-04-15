import styles from './FeaturesSection.module.css'
import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';

import { FaQuestion } from "react-icons/fa";
import { PhoneGraphic } from '@/components/PhoneGraphic/__index.js'

//import Image1 from '@/images/location.png';
//import { BsChevronDoubleDown } from 'react-icons/bs'
import { BsChevronDoubleDown } from 'react-icons/bs'

import { Homepage as HomepageText} from '@/text/data.js';

let my_array = HomepageText.FeaturesSection.items;

export default function FeaturesSection( props ){
    const [prevItem, setPrevItem] = useState(0)
    const [currentItem, setCurrentItem] = useState(1)
    const [nextItem, setNextItem] = useState(2)

    const incrementItem = () => {
        if ( currentItem + 1 < my_array.length ) {
            setCurrentItem(currentItem + 1);
        } else  { setCurrentItem(0); }

        if ( prevItem + 1 < my_array.length ) {
            setPrevItem(prevItem + 1);
        } else  { setPrevItem(0); }

        if ( nextItem + 1 < my_array.length ) {
            setNextItem(nextItem + 1);
        } else  { setNextItem(0); }
    
    }

    const decrementItem = () => {
        if ( currentItem - 1 >= 0 ) {
            setCurrentItem(currentItem - 1);
        } else  { setCurrentItem(my_array.length - 1); }

        if ( prevItem - 1 >= 0 ) {
            setPrevItem(prevItem - 1);
        } else  { setPrevItem(my_array.length - 1); }

        if ( nextItem - 1 >= 0 ) {
            setNextItem(nextItem - 1);
        } else  { setNextItem(my_array.length - 1); }
    
    }


    useEffect(() => {

    }, [])

    
    

    return ( 
        <div className={`webpage-content-section-container ${styles['features-col']}`}>
            <div className="webpage-content-section-graphic-box">
                <PhoneGraphic></PhoneGraphic>
            </div>
            <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>
                <h3>{HomepageText.FeaturesSection.h3}</h3>
                <h5>{HomepageText.FeaturesSection.h5}</h5>
                <p className={`margin-0  margin-bottom-10 ${styles['features-p-line-clamp']}`}>{HomepageText.FeaturesSection.p}</p>
                <span className={`${styles['cr']}`}>{HomepageText.FeaturesSection.span}</span>
                <div className={`flex flow-row flex-center ${styles['features-slider-container']}`} >

                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                        { (  <Image loading="lazy" src={my_array[prevItem].image} alt=""></Image>) }
                        <h5>{ my_array[prevItem].title}</h5>
                    </div>
                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                        { (  <Image loading="lazy" src={my_array[currentItem].image} alt=""></Image>) }
                        <h5>{ my_array[currentItem].title}</h5>
                    </div>
                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                         { (  <Image loading="lazy" src={my_array[nextItem].image} alt=""></Image>) }
                        <h5>{ my_array[nextItem].title}</h5>
                    </div>
             
                    <button className={`${styles['features-slider-container-l-button']}`} onClick={() => decrementItem()}>
                        <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                    </button>
                    <button className={`${styles['features-slider-container-r-button']}`} onClick={() => incrementItem()} >
                        <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                    </button>
                </div>
            </div>
        </div>
    ) 
}