import { toggleInputAC, typeInputTextAC } from '../../redux/todoReducer';
import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = state => ({ inputText: state.todoSection.inputText,
                                    toggled: state.todoSection.toggled,
                                    todos: state.todoSection.todos });

const mapDispatchToProps = dispatch => ({ 
    toggleInput: () => dispatch(toggleInputAC()),
    typeInputText: text => dispatch(typeInputTextAC(text))
});

const ContainerContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ContainerContainer;