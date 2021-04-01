const initialState = '';

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded':
            return action.payload;
        case 'todos/todoAdded2':
            return action.payload;
        default:
            return state;
    };
};

// function todoReducer(state = initialState, action) {
//     return 'state'
// }

export default todoReducer;