import styles from "./button.module.css"
import propTypes from "prop-types"
// import Image from "next/Image"
// import Link from "next/Link"


export default function Button(props){

    let defaultHeight = 45;
    const style = {
        background: props.backgroundColor
    }


    switch(props.type) {
        case "circle": 
            return(
                <div className={`${styles['circle']}`}>
                    <Link href={props.link}>
                    <Image src={props.imageLink} alt=""/>            
                    <p>{props.description}</p>
                    </Link>
                </div>
            )
            break;
        case "square":
            return (
                <div className={`${styles['square']}`}>
                    <Link href={props.link}>
                    <Image src={props.imageLink} alt=""/>
                    </Link>
                </div>
            )
            break;
        case "rectangle":
            return (
                <div className={`${styles['rectangle']}`}>
                    <Link href={props.link}> 
                    <Image src={props.imageLink} alt=""/>            
                    <p>{props.description}</p>
                    </Link>
                </div>
            )
            break;
        default:
            return (
                <></>
            )
            break;
    }
    return (
        <div className={`${styles['button-box']}`}>
            <Link href="example.com"> 
            {/* Commented as it as throwing error in build <Image></Image>*/}
            <p>{props.description}</p>
            </Link>
        </div>
    )
}

Button.propTypes = {
    height: propTypes.string,
    width: propTypes.string,
    backgroundColor: propTypes.string,
    animation: propTypes.string,
    color: propTypes.string,
    shadow: propTypes.string,
    description: propTypes.string,
    link: propTypes.string,
    imageLink: propTypes.string
}

//Default Button PropTypes
Button.defaultProps = {
    height: "45px",
    width: "auto",
    backgroundColor: "#FFFFFF",
    animation: "none",
    color: "#fff",
    shadow: "",
    description: "empty",
    link: "example.org",
    imageLink: ""
}
// Use prop types
    //height, width
    //isCircle -- different radius
// What goes into a button? 
    //different drop shadows
    //different animations
    //diff colors
