import React from 'react';
import Heading from './Heading/Heading';
import styles from './Container.module.css';
import TodosContainer from './Todos/TodosContainer';

const Container = () => <div className={styles.container}>
                            <Heading />
                            <TodosContainer />
                        </div>

export default Container;