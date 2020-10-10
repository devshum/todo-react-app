import Todo from './Todo/Todo';
import React from 'react';
import TodoStub from './Todo/TodoStub/TodoStub';

const Todos = props => {
    let todos;
    if(props.todos.length > 0) todos = props.todos.map(todo => <Todo key={todo.ID} 
                                                                     id={todo.ID}
                                                                     text={todo.text} /> );

    return <div>
                { todos }
                <TodoStub stub={props.stub} />
           </div>
};

export default Todos;