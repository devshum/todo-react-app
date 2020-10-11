import TodoStub from './Todo/TodoStub/TodoStub';
import Todo from './Todo/Todo';
import React from 'react';

const Todos = props => {
    let todos;
    if(props.todos.length > 0) todos = props.todos.map(todo => <Todo key={todo.ID} 
                                                                     ID={todo.ID}
                                                                     text={todo.text}
                                                                     onRemoveTodo={props.onRemoveTodo} /> );

    return <div>
                { todos }
                <TodoStub todos={props.todos} />
           </div>
};

export default Todos;