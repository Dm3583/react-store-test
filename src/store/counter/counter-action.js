import actionTypes from './action-types';

const Increment = num => ({
    type: actionTypes.INCREMENT,
    payload: num,
});

const Decrement = num => ({
    type: actionTypes.DECREMENT,
    payload: num,
});

export default { Increment, Decrement }