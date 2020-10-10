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
                <Input toggled={props.toggled} 
                       inputText={props.inputText} 
                       onTypeInputText={props.typeInputText} />

                <HeadingContainer />
                
                <Todos todos={props.todos}
                       toggled={props.toggled} />
                
                <div className={styles.button}>
                    <Button toggled={props.toggled} 
                            todos={props.todos} 
                            toggleInput={props.toggleInput} />
                </div>
            </div>
}

export default Container;