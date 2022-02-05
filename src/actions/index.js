
// this variables are called ===>actions types
export const ADD_MOVIES = 'ADD_MOVIES';
// this variables are called ===>actions Creators asthey are returnung a action or they are creatinga actions
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_MOVIES = 'SHOW_MOVIES';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export function addMovies(movies){
return {
    type:ADD_MOVIES,
    movies
}
}
export function addFavourite(movie){
return {
    type:ADD_FAVOURITES ,
    movie
}
}

// performining action to remove favourite from the movies
export function removeFavourite(movie){
        return{
            type:REMOVE_FAVOURITE,
            movie
        }
}
// for show movies dispattch on click of movie
export function showMovies(){
    return{
        type:SHOW_MOVIES,
        // movies
    }
}
export function showFav(){
    return{
       type:SHOW_FAVOURITE
    }
}