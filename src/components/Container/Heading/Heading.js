import DayOfWeek from './DayOfWeek/DayOfWeek';
import styles from './Heading.module.css';
import Date from './Date/Date';
import React from 'react';

const Heading = () => <div className={styles.heading}>
                            <Date />
                            <DayOfWeek />
                      </div>

export default Heading;