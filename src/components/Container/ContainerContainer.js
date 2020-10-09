//import { toggleInputAC } from '../../redux/todoReducer';
import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = state => ({ toggled: state.todoSection.toggled });

const mapDispatchToProps = dispatch => ({
    toggleInput: () => dispatch({ type: 'TOGGLE-INPUT' })
});

const ContainerContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ContainerContainer;