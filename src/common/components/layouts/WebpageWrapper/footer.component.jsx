import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
//import styles from './webpage.module.css'
import styles from './webpage.module.css'
import Logo from "@/AR-Logo"

import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa'




export default function Footer(props) {

    return (
        <footer>
            <div className={`${styles['footer-top-wrapper']}`}>
                <div className={`${styles['footer-section']} ${styles['first-section']}`}>
                    <h4>About Us</h4>
                    <p>
                        Amet dictum sit amet justo donec enim diam. Mi eget mauris pharetra et. Netus et malesuada fames ac. Aenean vel elit scelerisque mauris pellentesque. Semper auctor neque vitae tempus quam pellentesque. Ultrices tincidunt arcu non sodales neque sodales.
                    </p>
                    <div className={`${styles['footer-section-icon-wrapper']}`}>
                        <div className={`${styles['footer-section-icon']}`}><FaLinkedinIn size={'1.25em'} color={'#fff'}/></div>
                        <div className={`${styles['footer-section-icon']}`}><FaFacebookF  size={'1.25em'} color={'#fff'}/></div>
                        <div className={`${styles['footer-section-icon']}`}><FaInstagram  size={'1.25em'} color={'#fff'}/></div>
                        <div className={`${styles['footer-section-icon']}`}><FaYoutube  size={'1.25em'} color={'#fff'}/></div> 
                    </div>   
                </div>
                <div className={`${styles['footer-section']} ${styles['second-section']}`}> 
                    <h4>Get Listed</h4>
                    <p>
                        Amet dictum sit amet justo donec enim diam. Mi eget mauris pharetra et. Netus et malesuada fames ac. Aenean vel elit scelerisque mauris pellentesque. Semper auctor neque vitae tempus quam pellentesque. Ultrices tincidunt arcu non sodales neque sodales.
                    </p>
                    <button>Join Now</button>
                </div>
                <div className={`${styles['footer-section']} ${styles['third-section']}`}>
                    <h4>QuickLinks</h4>
                    <div className={`${styles['footer-section-list-box']}`}>
                        <li><a>Site Page 0</a></li>
                        <li><a>Site Page 1</a></li>
                        <li><a>Site Page 2</a></li>
                        <li><a>Site Page 3</a></li>
                        <li><a>Site Page 4</a></li>
                        <li><a>Site Page 5</a></li>
                        <li><a>Site Page 6</a></li>
                        <li><a>Site Page 7</a></li>
                        <li><a>Site Page 8</a></li>
                        <li><a>Site Page 9</a></li>
                    </div>
                </div>
            </div>
            <div className={`${styles['footer-bottom-wrapper']}`}>
                <div className={`footer-flow ${styles['footer-bottom-content']}`}>
                    <div className="flex">&nbsp; Terms & Conditions  &nbsp;</div> | 
                    <div className="flex">&nbsp; Privacy Policy &nbsp;</div> | 
                    <div className="flex">&nbsp; 2023 Soundscape </div>
                </div>
                  <div className={`${styles['footer-bottom-content']}`}>
                    <p>
                    An <Link href="https://new.rcos.io/" style={{textDecoration: 'none', color: 'red'/*'#4a88e8'*/}}> RCOS </Link> Project
                    </p>
                </div>
            </div>
        </footer>
    );
}


