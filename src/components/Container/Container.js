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
                       onAddTodo={props.addTodo}
                       toggled={props.toggled} />

                <HeadingContainer />
                
                <Todos onRemoveTodo={props.removeTodo}
                       todos={props.todos} />
                
                <div className={styles.button}>
                    <Button toggleInput={props.toggleInput}
                            toggled={props.toggled}
                            todos={props.todos} />
                </div>
            </div>
}

export default Container;