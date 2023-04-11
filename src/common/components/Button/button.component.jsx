import styles from "./Button.module.css"
import propTypes from "prop-types"
import Image from "next/Image"
import Link from "next/Link"


// <Button type="circle" />


export default function Button(props){

    let defaultHeight = 45;


    switch(prop.type) {
        case "circle": 
            break;
        case "square":
            break;
        case "rectangle":
            break;
        default:
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
    description: propTypes.string
}

//Default Button PropTypes
Button.defaultProps = {
    height: "45px",
    width: "auto",
    backgroundColor: "#000",
    animation: "none",
    color: "#fff",
    shadow: "",
    description: "empty"
}
// Use prop types
    //height, width
    //isCircle -- different radius
// What goes into a button? 
    //different drop shadows
    //different animations
    //diff colors
