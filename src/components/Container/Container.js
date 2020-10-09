import HeadingContainer from './Heading/HeadingContainer';
import styles from './Container.module.css';
import Button from './Button/Button';
import Input from './Input/Input';
import Todos from './Todos/Todos';
import React from 'react';

const Container = props => {
    let containerStyles = [];
    props.toggled ? containerStyles = [styles.container, styles.inputShown]
                  : containerStyles = [styles.container, styles.inputHidden]

    return <div className={containerStyles.join(' ')}>
                <Input toggled={props.toggled} />
                <HeadingContainer />
                <Todos todos={props.todos} />
                <div className={styles.button}>
                    <Button toggleInput={props.toggleInput} />
                </div>
            </div>
}

export default Container;