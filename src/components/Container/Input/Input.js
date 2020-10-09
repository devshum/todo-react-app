import ButtonSubmit from './ButtonSubmit/ButtonSubmit';
import styles from './Input.module.css';
import React from 'react';

const Input = props => {
   let inputContainerStyles = [];
   props.toggled ? inputContainerStyles = [styles.inputContainer, styles.shown]
                 : inputContainerStyles = [styles.inputContainer, styles.hidden];

    return <div className={inputContainerStyles.join(' ')}>
                <input type="text"/>
                <div className={styles.button}>
                    <ButtonSubmit />
                </div>
            </div>
};

export default Input;