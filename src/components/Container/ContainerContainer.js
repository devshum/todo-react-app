import { toggleInputAC } from '../../redux/todoReducer';
import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = state => ({ toggled: state.todoSection.toggled,
                                    todos: state.todoSection.todos });

const mapDispatchToProps = dispatch => ({ toggleInput: () => dispatch(toggleInputAC()) });

const ContainerContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ContainerContainer;