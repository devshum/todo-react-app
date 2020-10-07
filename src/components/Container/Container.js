import React from 'react';
import Heading from './Heading/Heading';
import styles from './Container.module.css';
import ListItems from './ListItems/ListItems';

const Container = () => <div className={styles.container}>
                            <Heading />
                            <ListItems />
                        </div>

export default Container;