import React from 'react';
import styles from './Date.module.css';

const Date = props => <div className={styles.fullDate}>
                        <span className={styles.date}>{props.date}</span>
                        <span className={styles.month}>{props.month}</span>
                        <span className={styles.year}>{props.year}</span>
                      </div>

export default Date;