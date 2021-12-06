import React from "react";

import styles from './Button.module.scss'

const Button = (props) => {
    return (
        <>
            {props.white && <button
                className={styles.white}
                style={props.style}
                onClick={props.onClick}>
                {props.value}
                {props.src && <img src={props.src} alt="icon" />}
            </button>}
            {props.green && <button
                className={styles.green}
                style={props.style}
                onClick={props.onClick}>
                {props.value}
            </button>}
        </>
    )
}

export default Button