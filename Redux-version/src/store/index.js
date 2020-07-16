import { combineReducers } from 'redux';
import counter from './Reducer/counter';

const reducers = combineReducers({
    counter
});

export default reducers;