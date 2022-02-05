import React from 'react';
import { addFavourite } from '../actions';
import { removeFavourite } from '../actions';
class MovieCard extends React.Component {
   handleFavouriteClick = ()=>{
       const { movie } = this.props
       // here we dont have dispatch so we need to pass it from app
       this.props.dispatch(addFavourite(movie));
   } 
   unhandleFavouriteClick = ()=>{
    // console.log('mmm',movie)
    const {movie} = this.props
    this.props.dispatch(removeFavourite(movie))
   }
    render() {
        const { movie,isFavourite } = this.props
         console.log('movies propss==>',this.props)
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster} />
                </div>
                <div className='right'>
                   <div className='title'>{movie.Title}</div>
                   <div className='plot'>{movie.Plot}</div>
                   <div className='footer'>
                       <div className='ratings'>{movie.imdbRating}</div>
                        {isFavourite?  <button className='unfavourite-btn' onClick={this.unhandleFavouriteClick} >UNFavourites</button>:<button className='favourite-btn' onClick={this.handleFavouriteClick} >Favourites</button>}
                        
                   </div>

                </div>

            </div>
        );
    }
}

export default MovieCard;