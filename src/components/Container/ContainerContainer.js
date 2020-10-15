import { toggleInput, 
         typeInputText, 
         addTodo, 
         removeTodo } from '../../redux/todoReducer';

import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = state => ({ inputText: state.todoSection.inputText,
                                    toggled: state.todoSection.toggled,
                                    todos: state.todoSection.todos });

const ContainerContainer = connect(mapStateToProps, 
    { addTodo, removeTodo, toggleInput, typeInputText })(Container);

export default ContainerContainer;