import DayOfWeek from './DayOfWeek/DayOfWeek';
import styles from './Heading.module.css';
import Date from './Date/Date';
import React from 'react';

const Heading = props => <div className={styles.heading}>
                            <Date date={props.date} month={props.month} year={props.year} />
                            <DayOfWeek day={props.day}/>
                         </div>

export default Heading;