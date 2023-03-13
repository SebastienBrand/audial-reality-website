import styles from './FeaturesSection.module.css'
import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';

import Headphone from '@/images/headphone-3d.png';
import Beacon from '@/images/beacon-3d.png';
import Battery from '@/images/battery-3d.png';

import { FaQuestion } from "react-icons/fa";
import { PhoneGraphic } from '@/components/PhoneGraphic/__index.js'

//import Image1 from '@/images/location.png';
//import { BsChevronDoubleDown } from 'react-icons/bs'
import { BsChevronDoubleDown } from 'react-icons/bs'

let my_array = [ 
    {   title: 'Lorem Ipsum 1',
        image: (  <Image src={ Headphone } alt=""></Image>)
    }, 
    {   title: 'Lorem Ipsum 2',
        image: (  <Image src={ Beacon } alt=""></Image>) 
    },  
    {   title: 'Lorem Ipsum 3',
        image: (  <Image src={ Battery } alt=""></Image>) 
    }, 
    {   title: 'Lorem Ipsum 4',
        image: (  <Image src={ Headphone } alt=""></Image>) 
    }, 
    {   title: 'Lorem Ipsum 5',
        image: (  <Image src={ Beacon } alt=""></Image>) 
    },    
    {   title: 'Lorem Ipsum 6',
        image: (  <Image src={ Battery } alt=""></Image>) 
    }]

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
        console.log(currentItem)
    }, [])

    
    

    return ( 
        <div className={`webpage-content-section-container ${styles['features-col']}`}>
            <div className="webpage-content-section-graphic-box">
                <PhoneGraphic></PhoneGraphic>
            </div>
            <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>
                <h3>Rhoncus aenean vel elit</h3>
                <h5>Ipsum dolor sit amet consectetur adipiscing</h5>
                <p className={`margin-0  margin-bottom-10 ${styles['features-p-line-clamp']}`}>Facilisis mauris sit amet massa. Vitae semper quis lectus nulla at volutpat. Nibh venenatis cras sed felis eget velit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae nunc sed velit dignissim sodales ut eu sem integer. Amet risus nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio ut sem nulla pharetra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id.</p>
                <span className={`${styles['cr']}`}>Continue Reading</span>
                <div className={`flex flow-row flex-center ${styles['features-slider-container']}`} >

                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                        { my_array[prevItem].image}
                        <h5>{ my_array[prevItem].title}</h5>
                    </div>
                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                        { my_array[currentItem].image}
                        <h5>{ my_array[currentItem].title}</h5>
                    </div>
                    <div className={`flex flow-col flex-center ${styles['features-slider-item']}`} >
                         { my_array[nextItem].image}
                        <h5>{ my_array[nextItem].title}</h5>
                    </div>
             
                    <button className={`${styles['features-slider-container-l-button']}`} onClick={() => decrementItem()}><
                        BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                    </button>
                    <button className={`${styles['features-slider-container-r-button']}`} onClick={() => incrementItem()} >
                        <BsChevronDoubleDown size={'2.25em'} color={'rgba(255, 255, 255, var(--high-emphasis-text))'}/>
                    </button>
                </div>
            </div>
        </div>
    ) 
}