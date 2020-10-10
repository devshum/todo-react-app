import React from 'react';
import styles from './TodoStub.module.css';

const TodoStub = props => {
    let todoStubStyles = [];
    props.stub ? todoStubStyles = [styles.todoStub, styles.shown]
               : todoStubStyles = [styles.todoStub, styles.hidden];

    return <div className={todoStubStyles.join(' ')}>
                <h3>Start wtiring plans</h3>
                <span>&#8659;</span>
           </div>
};


export default TodoStub;