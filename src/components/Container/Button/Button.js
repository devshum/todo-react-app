import styles from './Button.module.css';
import React from 'react';

const Button = props => {
    let buttonStyles = [];
    props.toggled && props.todos.length === 0 ? buttonStyles = [styles.button]
                                                : buttonStyles = [styles.button, styles.buttonScaleAnimation]
    const toggleInput = () => props.toggleInput();

    return <button onClick={toggleInput} className={buttonStyles.join(' ')}><span>&#10010;</span></button>
};

export default Button;