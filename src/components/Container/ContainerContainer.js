import { toggleInputAC, 
         typeInputTextAC, 
         addTodoAC, 
         removeTodoAC } from '../../redux/todoReducer';

import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = state => ({ inputText: state.todoSection.inputText,
                                    toggled: state.todoSection.toggled,
                                    stub: state.todoSection.stub,
                                    todos: state.todoSection.todos });

const mapDispatchToProps = dispatch => ({ 
    onAddTodo: () => dispatch(addTodoAC()),
    onRemoveTodo: ID => dispatch(removeTodoAC(ID)),
    toggleInput: () => dispatch(toggleInputAC()),
    typeInputText: text => dispatch(typeInputTextAC(text))
});

const ContainerContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ContainerContainer;