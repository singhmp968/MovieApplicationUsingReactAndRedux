// our reducer should be pure function 
// and here our function should be pure function
// and here our for same input we should have smar output
// here state is current state and if it is undefined then we need to make it as empty array as our global state will be a list of movies
import {ADD_MOVIES,ADD_FAVOURITES, REMOVE_FAVOURITE,SHOW_MOVIES,SHOW_FAVOURITE} from '../actions';
const initialStateMovieState = {
list:[],
favourites:[],
showFavourites:false
}
export default function movies(state=initialStateMovieState,action){
// here we are making our intent t change
// in react community we avaod using if elsse we use switch
// if(action.type===ADD_MOVIES){
//     // a reducer has to return something either original
//     //return action.movies
//     return{
//         ...state,
//         list:action.movies
//     }
// }
// return state;
// there fore we use suitch 
switch(action.type){
    case ADD_MOVIES:
        return{
                ...state,
                list:action.movies
    }
    case ADD_FAVOURITES:
        return{
            ...state,
            favourites:[action.movie,...state.favourites]
        } 
    case REMOVE_FAVOURITE:
        console.log('lolo',action.movie.Title)
            const filterMovies = state.favourites.filter(
              movie=>movie.Title !== action.movie.Title
          );
          return {
              ...state,
              favourites:filterMovies
          };
    case SHOW_MOVIES:
        return{
            ...state,
            showFavourites:false
        }
    case SHOW_FAVOURITE:
        return{
            ...state,
            showFavourites:true
        }
        
    default:
        return state
}
}    
