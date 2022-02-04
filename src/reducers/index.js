// our reducer should be pure function 
// and here our function should be pure function
// and here our for same input we should have smar output
// here state is current state and if it is undefined then we need to make it as empty array as our global state will be a list of movies
import {ADD_MOVIES} from '../actions';
export default function movies(state=[],action){
    // here we are making our intent t change
    if(action.type===ADD_MOVIES){
        // a reducer has to return something either original
        return action.movies
    }
    return state;
}