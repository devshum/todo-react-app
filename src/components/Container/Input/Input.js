import ButtonSubmit from './ButtonSubmit/ButtonSubmit';
import styles from './Input.module.css';
import React from 'react';

const Input = props => {
    let inputContainerStyles = [];
    props.toggled ? inputContainerStyles = [styles.inputContainer, styles.shown]
                  : inputContainerStyles = [styles.inputContainer, styles.hidden];

    const typeInputText = e => props.onTypeInputText(e.target.value);
    
    return <div className={inputContainerStyles.join(' ')}>
                <input type="text" onChange={typeInputText} value={props.inputText} />
                <div className={styles.button}>
                    <ButtonSubmit onAddTodo={props.onAddTodo} />
                </div>
            </div>
};

export default Input;