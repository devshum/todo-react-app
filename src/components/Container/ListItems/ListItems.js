import React from 'react';
import ListItem from './ListItem/ListItem';

const ListItems = props => {
    const todos = props.todos.map(todo => <ListItem id={todo.ID} text={todo.text} />)

    return ( <div>{ todos}</div>)
};

export default ListItems;