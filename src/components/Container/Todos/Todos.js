import React from 'react';
import Todo from './Todo/Todo';

const ListItems = props => {
    const todos = props.todos.map(todo => <Todo key={todo.id} id={todo.ID} text={todo.text} />)

    return ( <div>{ todos}</div>)
};

export default ListItems;