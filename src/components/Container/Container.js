import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import HeadingContainer from './Heading/HeadingContainer';
import styles from './Container.module.css';
import TodosContainer from './Todos/TodosContainer';

const Container = () => <div className={styles.container}>
                            <Input />
                            <HeadingContainer />
                            <TodosContainer />
                            <div className={styles.button}>
                                <Button />
                            </div>
                        </div>

export default Container;