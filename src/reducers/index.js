// our reducer should be pure function 
// and here our function should be pure function
// and here our for same input we should have smar output
// here state is current state and if it is undefined then we need to make it as empty array as our global state will be a list of movies
import {ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE,ADD_SEARCH_RESULT} from '../actions';
import { combineReducers } from 'redux';
const initialStateMovieState = {
    list:[],
    favourites:[],
    setShowFavourites:false
}
// creating reducer for movue
// export default function movies(state=initialStateMovieState,action){
// replacring it with rootReducers
export  function movies(state=initialStateMovieState,action){
   console.log('MOVIE REDUCER')
// here we are making our intent t change
    // if(action.type===ADD_MOVIES){
    //     // a reducer has to return something either original
    //     //return action.movies
    //     return{
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
               ...state,
                list:action.movies
            }
        case ADD_TO_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
                const filterArray = state.favourites.filter(
                    movie=>movie.Title!==action.movie.Title
                );
            return{
                ...state,
                favourites:filterArray
            };
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                setShowFavourites:action.val
            }
        default:
            return state
        }
}

const initialSearchState = {
    result:{}
};
// creatng search reducer
export function search(state =initialSearchState,action){
    console.log('SEARCH REDUCER')
  
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
               ...state,
               result:action.movie
            }
        default:
            return state
        }
}
const initialRootState = {
movies:initialStateMovieState, // this is refer to const initialStateMovieState = {}
search:initialSearchState // this is refer to const initialSearchState = {}
}
// here we are creating root state wichi contain both movie and search 
// and here we will be passing this root reduces to our index.js file
// and this will call every time we call every time we dispatch an action
/*
export default function rootReducer(state = initialRootState,action){
   return{
    movies:movies(state.movies,action), // refering to movie function  // here we are telling movies will be manage by movie rederer
    search:search(state.search,action) // refering to search function // here we are telling movies will be manage by search rederer
    // and in fy=uture we can add multiple reducers
}
}
*/
// we can overcome the above method rootReducer(state = initialRootState,action){} by using combine reducer
// here in combinereduceer we just need to call the function name instead of passing movies(state.movies,action) as combine reducer will handle it internally

export default combineReducers({
    // movies:movies,
    // search:search // it is the nameof the search function function
    movies,
    search
})
//Example of state
// var o = {a:1,b:2,c:3}
// concept of a var o2 = {...o,b:100}
// herer ...o will spread all the property of and hereb will get update there fore it will ber 
// o2 = {a:1,b:100}