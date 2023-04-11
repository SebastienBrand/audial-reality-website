import styles from './SupportSection.module.css'
import Image from 'next/image';
import Link from 'next/link';


import Image1 from '@/images/location.png';

import { BsChevronDoubleDown, BsQuestion } from 'react-icons/bs'

import { PhoneGraphic } from '@/components/PhoneGraphic/__index.js'
import { SoundHeart } from "@/components/SoundHeart/__index.js"

import { Homepage as HomepageText} from '@/text/data.js';

export default function SupportSection( props ){
     return ( 
        <div className={`webpage-content-section-container ${styles['support-padding-top']}  ${styles['support-wrapper']}`}> 
            <div className={`flex flow-col webpage-content-section-main-box ${styles['support-second-margin']}`}>
                <h3>{HomepageText.SupportSection.h3}</h3>
                <h5>{HomepageText.SupportSection.h5}</h5>
                <p className={`margin-0  margin-bottom-10 ${styles['support-p-line-clamp']}`}>{HomepageText.SupportSection.p}</p>
                <div className={`flex ${styles['button-wrapper']}`} >
                    <button><BsQuestion size={'1.75em'} color={'white'}/>{HomepageText.SupportSection.button[0]}</button>
                    <button><BsQuestion size={'1.75em'} color={'white'}/>{HomepageText.SupportSection.button[1]}</button>
                </div>
            </div>
            <div className={`webpage-content-section-graphic-box flex align-center ${styles['support-second-box']}`}>
                <SoundHeart />
            </div>
        
        </div>
    )
    
}


