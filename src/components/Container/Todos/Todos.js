import React from 'react';
import ListItem from './Todo/Todo';

const ListItems = props => {
    const todos = props.todos.map(todo => <ListItem key={todo.id} id={todo.ID} text={todo.text} />)

    return ( <div>{ todos}</div>)
};

export default ListItems;