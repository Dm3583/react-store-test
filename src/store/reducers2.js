const initState = 'qwertyuio';


function someReducer(state = initState, action) {


    switch (action.type) {
        case 'some/Forward':
            return [...state, action.payload].join('');

        case 'some/Reverse':
            return [...[...state].slice(0, -1)].join('');

        default:
            return state;
    }

};

export default someReducer;