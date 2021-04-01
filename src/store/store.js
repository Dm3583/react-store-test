import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducers';
import someReducer from './reducers2';
import counter from './counter/counter-reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    some: someReducer,
    counter
});

const store = createStore(rootReducer);

console.log(store);

export default store;