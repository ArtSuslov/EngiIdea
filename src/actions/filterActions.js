import axios from 'axios';

const filterApiLink = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
/*
or do I use: 
const key = 'c';
const value = 'list';
const filter = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${key}={value};`
?
*/
export const GET_FILTERS_REQUEST = 'GET_FILTERS_REQUEST';
export const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';
export const GET_FILTERS_FAIL = 'GET_FILTERS_FAIL';
export const CHECKBOX_CHANGE = 'CHECKBOX_CHANGE';

export const getFilters = () => {
    return function(dispatch) {
        dispatch({
            type: GET_FILTERS_REQUEST
        });

        axios.get(filterApiLink).then( r => {
            if(typeof Array.isArray(r.data.drinks)) {
                const filters = r.data.drinks.map(drink => drink.strCategory);
                
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

export const changeCheckbox = (drink, checkedList) => {
    const newArr = checkedList.includes(drink)
        ? checkedList.filter(listItem => listItem !== drink)
        : [...checkedList, drink];

    return {
        type: CHECKBOX_CHANGE,
        payload: newArr,
    }
}