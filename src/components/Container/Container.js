import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import Heading from './Heading/Heading';
import styles from './Container.module.css';
import TodosContainer from './Todos/TodosContainer';

const Container = () => <div className={styles.container}>
                            <Input />
                            <Heading />
                            <TodosContainer />
                            <Button />
                        </div>

export default Container;