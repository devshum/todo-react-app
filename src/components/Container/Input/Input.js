import React from 'react';
import Button from '../Button/Button';
import styles from './Input.module.css';

const Input = () => <div className={styles.inputContainer}>
                        <input type="text"/>
                        <div className={styles.button}>
                            <Button />
                        </div>
                    </div>

export default Input;