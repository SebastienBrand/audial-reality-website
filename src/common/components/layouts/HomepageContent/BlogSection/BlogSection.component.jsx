import styles from './BlogSection.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Temp_Post_Picture from '@/images/temp-post-pic.jpg';




function PostShowcase(props){
  
    return (
        <div className={`flex flex-center flow-col ${styles['post-showcase-content-box']}`} >
            <Image src={props.data.featuredImage?.node.sourceUrl} alt={props.data.featuredImage?.node.altText} width={1000} height={500} />
            <h5 dangerouslySetInnerHTML={{ __html: props.data.title, }} />
            <div dangerouslySetInnerHTML={{ __html: props.data.excerpt, }} />
            <a href={props.data.path}> Continue Reading </a>
        </div>
    )
}




export default function BlogSection(props){

    console.log(props.allPosts)

    return (
        <div className={`flex flow-col webpage-section-container ${styles['blog-top-margin']}`} >
            <h3 className={`text-align-center`}>Rhoncus aenean vel elit</h3>
            <h5 className={`text-align-center`}>Ipsum dolor sit amet consectetur adipiscing</h5>
            <div className={`${styles['blog-showcase-wrapper']}`}>
                {props.allPosts && props.allPosts.length > 0 && props.allPosts.map(( element, index ) => {
                    return (
                        <div className={`flex flex-center ${styles['post-showcase-wrapper']}`} key={element.id} >
                            <PostShowcase data={element} />
                        </div>
                    )
                })}
                { /* Make a loading Thing */}
            </div>
        </div>
    )
}