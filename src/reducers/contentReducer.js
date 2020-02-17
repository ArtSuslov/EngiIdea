import { GET_CONTENT_FAIL, GET_CONTENT_SUCCESS, GET_CONTENT_REQUEST, CLEAR_CATEGORIES_LIST } from '../actions/contentActions';

const initialState = {
    categoriesList: [],
    isFetching: false,
    error: '',
}

export const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTENT_REQUEST: 
            return {...state, isFetching: true}
        
        case GET_CONTENT_SUCCESS: 
            return {...state, 
                    isFetching: false, 
                    categoriesList: action.payload,
                }
        
        case GET_CONTENT_FAIL: 
            return {...state, isFetching: false, error: action.payload.message}
        
        case CLEAR_CATEGORIES_LIST:
            return {...state, categoriesList: []}
        default:
            return state;
    }
}