import actionTypes from './action-types'

const counterReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case actionTypes.INCREMENT:
            return state + payload;
        case actionTypes.DECREMENT:
            return state - payload;
        default:
            return state;
    };
};

export default counterReducer;