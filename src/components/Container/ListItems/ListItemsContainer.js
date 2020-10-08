import { connect } from 'react-redux';
import ListItems from './ListItems';

const mapStateToProps = state => ({ todos: state.todoSection.todos });

// const mapDispatchToProps = dispatch => {
//     return null
// };

const ListItemsContainer = connect(mapStateToProps)(ListItems);

export default ListItemsContainer;