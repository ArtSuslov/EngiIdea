import axios from 'axios';

const contentApiLink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=`;

export const GET_CONTENT_REQUEST = 'GET_CONTENT_REQUEST';
export const GET_CONTENT_SUCCESS ='GET_CONTENT_SUCCESS';
export const GET_CONTENT_FAIL ='GET_CONTENT_FAIL';
export const CLEAR_CATEGORIES_LIST = 'CLEAR_CATEGORIES_LIST';

export const getDrinkByCategory = async name => {
    const categoryDrinks = await axios.get(contentApiLink + name).then(r => {
        if(typeof Array.isArray(r.data.drinks)){
            return r.data.drinks;
        } else return dispatch => dispatch({
            type: GET_CONTENT_FAIL,
            payload: new Error('Ошибка'),
        })
    }, 4);
    return {
            name, 
            drinks: categoryDrinks
        };
}

export const getDrinksByList =  drinksList => {
    return async dispatch => {
        dispatch({type: CLEAR_CATEGORIES_LIST});
        dispatch({type: GET_CONTENT_REQUEST});
        let contentList = [];
        for (let i = 0; i < drinksList.length; i++) {
            const category = await getDrinkByCategory(drinksList[i]);
            contentList = [...contentList, category];
        }
        dispatch({
            type: GET_CONTENT_SUCCESS,
            payload: contentList,
        });
    }
}