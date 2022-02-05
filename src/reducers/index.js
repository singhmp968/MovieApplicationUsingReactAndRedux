// our reducer should be pure function 
// and here our function should be pure function
// and here our for same input we should have smar output
// here state is current state and if it is undefined then we need to make it as empty array as our global state will be a list of movies
import {ADD_MOVIES} from '../actions';
const initialStateMovieState = {
    list:[],
    favourites:[]
}
export default function movies(state=initialStateMovieState,action){
    // here we are making our intent t change
    if(action.type===ADD_MOVIES){
        // a reducer has to return something either original
        //return action.movies
        return{
            ...state,
            list:action.movies
        }
    }
    return state;
}
//Example of state
// var o = {a:1,b:2,c:3}
// concept of a var o2 = {...o,b:100}
// herer ...o will spread all the property of and hereb will get update there fore it will ber 
// o2 = {a:1,b:100}