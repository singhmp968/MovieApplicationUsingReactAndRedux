
// this variables are called ===>actions types
export const ADD_MOVIES = 'ADD_MOVIES';
// this variables are called ===>actions Creators asthey are returnung a action or they are creatinga actions

export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}
