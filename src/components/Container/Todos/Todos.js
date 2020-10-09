import React from 'react';
import Todo from './Todo/Todo';

const Todos = props => {
    const todos = props.todos.map(todo => <Todo key={todo.ID} id={todo.ID} text={todo.text} />)

    return ( <div>{ todos }</div>)
};

export default Todos;