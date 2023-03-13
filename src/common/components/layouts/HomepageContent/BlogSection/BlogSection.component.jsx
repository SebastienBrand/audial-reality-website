import styles from './BlogSection.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Temp_Post_Picture from '@/images/temp-post-pic.jpg';




function PostShowcase(props){

    return (
        <div className={`flex flex-center flow-col ${styles['post-showcase-content-box']}`} >
            <Image src={Temp_Post_Picture} />
            <h5>Rhoncus aenean vel elit</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="/"> Continue Reading </a>

        </div>
    )
}




export default function BlogSection(props){

    return (
        <div className={`flex flow-col webpage-section-container ${styles['blog-top-margin']}`} >
            <h3 className={`text-align-center`}>Rhoncus aenean vel elit</h3>
            <h5 className={`text-align-center`}>Ipsum dolor sit amet consectetur adipiscing</h5>
            <div className={`${styles['blog-showcase-wrapper']}`}>
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div>
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div>
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div>
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div>
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div> 
                <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} >
                    <PostShowcase />
                </div>


            </div>
        </div>
    )
}