const initialState = {
    inputText: '',
    todos: [
                { ID: 1, text: 'Buy new sweatshirt'},
                { ID: 2, text: 'Read an article'},
                { ID: 3, text: 'Try not to fall asleep'},
                { ID: 4, text: 'Go for a walk'}
            ]
}

const todoReducer = (state = initialState, action) => {
    return state;
};

export default todoReducer;

