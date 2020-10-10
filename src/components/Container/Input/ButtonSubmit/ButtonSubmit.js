import styles from './ButtonSubmit.module.css';
import React from 'react';

const ButtonSubmit = props => {
    const addTodo = () => props.onAddTodo();
    
    return <button onClick={addTodo} className={styles.buttonSubmit}><span>&#10010;</span></button>
};

export default ButtonSubmit;