import { type } from "@testing-library/user-event/dist/type";

// this variables are called ===>actions types
export const ADD_MOVIES = 'ADD_MOVIES';
// this variables are called ===>actions Creators asthey are returnung a action or they are creatinga actions
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie){
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val){
    // we are returning the object
    return{
        type:SET_SHOW_FAVOURITE,
        val
    }
}
export function addMovieTOList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

// and here we are implementing the **thunk** as function handleMovieSearch(movie) is returning the function function(dispatch){}
export function handleMovieSearch(movie){
    console.log(movie,'dsadasdas')
// there for we need to wrap it into a dispatch function
// here with the help of middle ware we can tell the redux that if you got a action then simply pass that action and if you get a functin like this then all that particular function with dispatch as the argument and we naed that middlwware as thunk why thunk beacause it is a special type of function which is returnd by a function 
// retutning the function
return function(dispatch){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=8329a537&t=${movie}`
    fetch(url)
    .then(response=>response.json())
    .then(movie=>{
        console.log('movie is',movie)
        // dispatch and action 
        dispatch(addMovieSearchResult(movie))
    })
}
}

export function addMovieSearchResult(movie){
   return{
    type:ADD_SEARCH_RESULT,
    movie}
}