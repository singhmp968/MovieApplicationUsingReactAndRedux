
// this variables are called ===>actions types
export const ADD_MOVIES = 'ADD_MOVIES';
// this variables are called ===>actions Creators asthey are returnung a action or they are creatinga actions
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
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