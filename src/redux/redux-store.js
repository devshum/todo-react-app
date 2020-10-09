import { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer';
import headingReducer from './headingReducer';

const reducers = combineReducers({
    headingSection: headingReducer,
    todoSection: todoReducer
});

const store = createStore(reducers);

export default store;