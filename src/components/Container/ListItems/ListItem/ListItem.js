import React from 'react';
import styles from './ListItem.module.css';

const ListItem = () => <div className={styles.listItem}>
                            <input id="hack" type="checkbox"/>
                            <div>What to do</div>
                            <label htmlFor="hack">&nbsp;</label>
                       </div>

export default ListItem;