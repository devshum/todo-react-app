const TOGGLE_INPUT = 'TOGGLE-INPUT';

const initialState = {
    toggled: true,
    inputText: '',
    todos: [
                { ID: 1, text: 'Buy new sweatshirt'},
                { ID: 2, text: 'Read an article'},
                { ID: 3, text: 'Try not to fall asleep'},
                { ID: 4, text: 'Go for a walk'}
            ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INPUT:
            console.log('click')
            return {
                ...state,
                toggled: !state.toggled
            }
    
        default: return state
    }
};

export default todoReducer;

//export const toggleInputAC = () => ( {type: 'TOGGLE-INPUT' } );

