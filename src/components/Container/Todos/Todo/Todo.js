import styles from './Todo.module.css';
import React from 'react';

const Todo = props => {
     const removeTodo = () => props.onRemoveTodo(props.ID);

     return <div className={styles.todo}>
               <input id={`${props.ID}`} type="checkbox"/>
               <figure onClick={removeTodo}>&times;</figure>
               <span>{props.text}</span>
               <label htmlFor={`${props.ID}`}>&nbsp;</label>
           </div>
};

export default Todo;