import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from './webpage.module.css'
import Logo from "@/AR-Logo"

import Image from 'next/image';
import Link from 'next/link';

import { Header as HeaderText } from '@/text/data.js';

const HeaderComponent = (props) => {
    return (
        <header className="flex flex-row">
            <div className="flex flex-center fit-content header-logo-container">
                <Image loading="lazy" src={Logo} alt="Audio Reality Logo" />
            </div>
            <div className={`flex fill-horizontal flow-row justify-end ${styles['header-link-container']}`}>
                {HeaderText.buttons.map((element, index) => {
                    return (
                        /* DEV-TASK [Easy-Medium] (DONE): Make a clean animation for when any link is hovered on */
                        /* DEV-TASK [Easy-Medium]: Make the Sign In | Sign Up Its own button with a clean minimalistic animation */
                        /* DEV-TASK [Hard-Diffiucult]: Make drop down menus compatible with the following code. 
                            Another loop and sub arrays will be needed for this to be acheived */
                        <Link className="flex flex-center" key={"Header-Element-" + index} href={element.link}>
                            {element.title}
                        </Link>
                    );
                })}
                <div className={`flex flex-center`}>
                    <Link className={`flex flex-center ${styles['header-signup-button']}`} href={HeaderText.sign_up_button.link}>
                        {HeaderText.sign_up_button.title}
                    </Link>|
                    <Link className={`flex flex-center ${styles['header-signup-button']}`} href={HeaderText.join_now_button.link}>
                        {HeaderText.join_now_button.title}
                    </Link>
                </div>
            </div>
        </header>
    );
}


export default HeaderComponent;