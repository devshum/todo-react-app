import styles from './Button.module.css';
import React from 'react';

const Button = props => {
    let buttonStyles = [];
    props.stub && !props.toggled ? buttonStyles = [styles.button, styles.buttonScaleAnimation]
                                                : buttonStyles = [styles.button]
    const toggleInput = () => props.toggleInput();

    return <button onClick={toggleInput} className={buttonStyles.join(' ')}><span>&#10010;</span></button>
};

export default Button;