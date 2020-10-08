import React from 'react';
import Heading from './Heading/Heading';
import styles from './Container.module.css';
import ListItemsContainer from './ListItems/ListItemsContainer';

const Container = () => <div className={styles.container}>
                            <Heading />
                            <ListItemsContainer />
                        </div>

export default Container;