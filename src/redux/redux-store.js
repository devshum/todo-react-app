import { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer';

const reducers = combineReducers({
    todoSection: todoReducer
});

const store = createStore(reducers);

export default store;