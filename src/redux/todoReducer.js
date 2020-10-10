const ADD_TODO = 'ADD-TODO';
const TOGGLE_INPUT = 'TOGGLE-INPUT';
const TYPE_INPUT_TEXT = 'TYPE-INPUT-TEXT';

const uniqid = require('uniqid');

const initialState = {
    stub: true,
    toggled: false,
    inputText: '',
    todos: [
                // { ID: 1, text: 'Buy new sweatshirt'},
                // { ID: 2, text: 'Read an article'},
                // { ID: 3, text: 'Try not to fall asleep'},
                // { ID: 4, text: 'Go for a walk'}
            ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INPUT:
            console.log('toggle')
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
                    inputText: '',
                    stub: false
                };

            } else return state;

        default: return state;
    }
};

export default todoReducer;

export const addTodoAC = () => ({ type: ADD_TODO });
export const toggleInputAC = () => ({ type: TOGGLE_INPUT });
export const typeInputTextAC = inputText => ({ type: TYPE_INPUT_TEXT, inputText });

