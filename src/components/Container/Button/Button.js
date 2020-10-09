import styles from './Button.module.css';
import React from 'react';

const Button = props => {
    const toggleInput = () => props.toggleInput();

    return <button onClick={toggleInput} className={styles.button}><span>&#10010;</span></button>
};

export default Button;