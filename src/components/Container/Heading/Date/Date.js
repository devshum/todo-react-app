import React from 'react';
import styles from './Date.module.css';

const Date = () => (
    <div className={styles.date}>
        <span className={styles.figure}>12</span>
        <span className={styles.month}>JAN</span>
        <span className={styles.year}>2016</span>
    </div>
);

export default Date;