import styles from './GridSection.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { FaQuestion } from "react-icons/fa";

import { Homepage as HomepageText} from '@/text/data.js';

//import Image1 from '@/images/location.png';
//import { BsChevronDoubleDown } from 'react-icons/bs'


export default function GridSection( props ){

    let temp_array = [{ color: 'blue' } , { color: 'pink' } , { color: 'green' } , { color: 'blue' } , { color: 'pink' } , { color: 'green' } , { color: 'blue' } , { color: 'pink' }]

     return ( 
        <div className="webpage-section-container align-center">
            <h3>{HomepageText.GridSection.h3}</h3>
            <div className={`${styles['grid']}`} >
                {temp_array.map(( element, index ) => {
                    return (
                        <div className={`flex flex-center flow-col ${styles['grid-box']}`} key={`grid-box-${index}`} >
                            <div className={`${styles['icon']} icon-bg-${element.color}`} key={`icon-${index}`}>
                                <FaQuestion size={'1.75em'} color={'white'}/>
                            </div>

                            <h5>{HomepageText.GridSection.h5}</h5>
                        </div>
                    )
                })}

            </div>
        </div>
    )
    
}