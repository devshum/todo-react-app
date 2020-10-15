

const ADD_TODO = 'ADD-TODO';
const REMOVE_TODO = 'REMOVE-TODO';
const TOGGLE_INPUT = 'TOGGLE-INPUT';
const TYPE_INPUT_TEXT = 'TYPE-INPUT-TEXT';

const uniqid = require('uniqid');

const initialState = {
    toggled: false,
    inputText: '',
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INPUT:
            return {
                ...state,
                toggled: !state.toggled
            };

        case TYPE_INPUT_TEXT:
            return {
                ...state,
                inputText: action.inputText
            };

        case ADD_TODO:
            const text = state.inputText;

            if(state.inputText !== '') {
                
                return {
                    ...state,
                    todos: [...state.todos,  { ID: uniqid(), text: text} ],
                    inputText: ''
                };

            } else return state;

        case REMOVE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.ID !== action.ID)],
            };

        default: return state;
    }
};

export default todoReducer;

export const addTodo = () => ({ type: ADD_TODO });
export const toggleInput = () => ({ type: TOGGLE_INPUT });
export const removeTodo = ID => ({ type: REMOVE_TODO, ID });
export const typeInputText = inputText => ({ type: TYPE_INPUT_TEXT, inputText });

