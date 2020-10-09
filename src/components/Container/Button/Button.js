import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    const toggleInput = () => props.toggleInput();

    return(<button onClick={toggleInput} className={styles.button}><span>&#10010;</span></button>)
}

export default Button;