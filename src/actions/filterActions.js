import axios from 'axios';

const filterApiLink = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
/*
or do I use: 
const key = 'c';
const value = 'list';
const filter = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${key}={list};`
?
*/
export const GET_FILTERS_REQUEST = 'GET_FILTERS_REQUEST';
export const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS'
export const GET_FILTERS_FAIL = 'GET_FILTERS_FAIL'

export function getFilters() {
    return function(dispatch) {
        dispatch({
            type: GET_FILTERS_REQUEST
        });

        axios.get(filterApiLink).then( r => {
            if(typeof r.data === 'object') {
                const filters = r.data;

                dispatch({
                    type: GET_FILTERS_SUCCESS,
                    payload: filters,
                });
            } else dispatch({
                type: GET_FILTERS_FAIL,
                error: true,
                payload: new Error('Ошибка'),
            });
        }, 4)
    }
}