import { GET_FILTERS_FAIL, GET_FILTERS_SUCCESS, GET_FILTERS_REQUEST } from '../actions/filterActions';

const initialState = {
    filterList: [],
    isFetching: false,
    error: '',
    checkedFiltersList: [],
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILTERS_REQUEST: 
            return {...state, isFetching: true}
        
        case GET_FILTERS_SUCCESS: 
            return {...state, 
                    isFetching: false, 
                    filterList: action.payload, 
                    checkedFiltersList: action.payload
                }
        
        case GET_FILTERS_FAIL: 
            return {...state, isFetching: false, error: action.payload.message}
        
        default:
            return state;
    }
}