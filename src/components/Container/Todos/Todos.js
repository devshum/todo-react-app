import Todo from './Todo/Todo';
import React from 'react';

const Todos = props => {
    let todos;
    props.todos.length === 0 ? todos = 'Start adding plans!'
                             : todos = props.todos.map(todo => <Todo key={todo.ID} id={todo.ID} text={todo.text} />)

    return <div>{ todos }</div>
};

export default Todos;