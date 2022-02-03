import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props
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
                        <button className='favourite-btn'>Favourites</button>
                   </div>

                </div>

            </div>
        );
    }
}

export default MovieCard;