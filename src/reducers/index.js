import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { contentReducer } from './contentReducer';

export const rootReducer = combineReducers({
    filters: filterReducer,
    content: contentReducer,
});
