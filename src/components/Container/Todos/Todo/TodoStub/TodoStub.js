import React from 'react';
import styles from './TodoStub.module.css';

const TodoStub = props => {
    let todoStubStyles = [];
    props.toggled ? todoStubStyles = [styles.todoStub, styles.hidden]
                  : todoStubStyles = [styles.todoStub, styles.shown];

    return <div className={todoStubStyles.join(' ')}>
                <h3>Start wtiring plans</h3>
                <span>&#8659;</span>
           </div>
};


export default TodoStub;