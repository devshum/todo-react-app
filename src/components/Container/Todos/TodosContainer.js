import { connect } from 'react-redux';
import Todos from './Todos';

const mapStateToProps = state => ({ todos: state.todoSection.todos });

const ListItemsContainer = connect(mapStateToProps)(Todos);

export default ListItemsContainer;