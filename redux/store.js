import {createStore, combineReducers} from 'redux';

import globalReducer from './reducers';

const rootReducer = combineReducers({globalReducer});

export const Store = createStore(rootReducer);