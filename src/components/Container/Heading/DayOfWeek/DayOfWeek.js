import React from 'react';
import styles from './DayOfWeek.module.css';

const DayOfWeek = props => <div className={styles.dayOfWeek}>{props.day}</div>

export default DayOfWeek;