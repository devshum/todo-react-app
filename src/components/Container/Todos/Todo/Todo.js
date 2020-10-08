import React from 'react';
import styles from './Todo.module.css';

const Todo = props => <div className={styles.todo}>
                            <input id={`${props.id}`} type="checkbox"/>
                            <div>{props.text}</div>
                            <label htmlFor={`${props.id}`}>&nbsp;</label>
                       </div>

export default Todo;