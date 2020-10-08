import React from 'react';
import styles from './Todo.module.css';

const Todo = props => <div className={styles.todo}>
                            <input id={`${props.id}`} type="checkbox"/>
                            <figure>&times;</figure>
                            <span>{props.text}</span>
                            <label htmlFor={`${props.id}`}>&nbsp;</label>
                       </div>

export default Todo;