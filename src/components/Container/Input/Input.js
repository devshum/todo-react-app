import React from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';

const Input = props => {
   let inputContainer = [];
   props.toggled ? inputContainer = [styles.inputContainer, styles.shown]
                 : inputContainer = [styles.inputContainer, styles.hidden];

    return(
        <div className={inputContainer.join(' ')}>
            <input type="text"/>
            <div className={styles.button}>
                <Button />
            </div>
        </div>
    );
}

export default Input;