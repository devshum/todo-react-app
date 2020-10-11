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
                <Input onTypeInputText={props.typeInputText}
                       inputText={props.inputText} 
                       onAddTodo={props.onAddTodo}
                       toggled={props.toggled} />

                <HeadingContainer />
                
                <Todos onRemoveTodo={props.onRemoveTodo}
                       todos={props.todos}
                       stub={props.stub} />
                
                <div className={styles.button}>
                    <Button toggleInput={props.toggleInput}
                            toggled={props.toggled}
                            stub={props.stub} />
                </div>
            </div>
}

export default Container;