import styles from "./SearchBar.module.css";
import React, { useState, createContext, useContext, useEffect, useRef } from "react";
import { FaSearch } from 'react-icons/fa'
import PropTypes from 'prop-types'

function SearchBar(props){
    const [searchText, setSearchText] = useState("")

    const style = {
        background: props.backgroundColor,
        boxShadow: `0 ${props.shadowHeight} ${props.shadowIntensity} ${props.shadowColor}, 0 0 0 ${props.borderWidth} ${props.borderColor}`
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log(props.handleClick)
        props.handleClick(e)
    }

    return ( 
       <div className={`${styles['searchbar-container']}`}>
            <form method="get" action="">
                <input type="text" placeholder="Search" value={searchText} 
                    onChange={e => setSearchText(e.target.value)} required />
                <button onClick={onClick}>
                    <FaSearch size={'1.00em'} color={'#fff'}/>
                </button>
            </form>
       </div>
    );
}


SearchBar.propTypes = {
    backgroundColor: PropTypes.string,
    shadowIntensity: PropTypes.string,
    shadowColor: PropTypes.string,
    borderColor: PropTypes.string,
    shadowHeight: PropTypes.string,
    borderWidth: PropTypes.string,
    handleClick: PropTypes.func,
}

SearchBar.defaultProps = {
    backgroundColor:  '#212121',
    shadowColor: '#212121',
    borderColor: '#ffffffeb',
    shadowIntensity: '40px',
    shadowHeight: '10px',
    borderWidth: '5px',
    handleClick: () => {  }
}

export default SearchBar