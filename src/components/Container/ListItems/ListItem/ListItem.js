import React from 'react';
import styles from './ListItem.module.css';

const ListItem = props => <div className={styles.listItem}>
                            <input id={`${props.id}`} type="checkbox"/>
                            <div>{props.text}</div>
                            <label htmlFor={`${props.id}`}>&nbsp;</label>
                       </div>

export default ListItem;