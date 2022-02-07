import React, { Component } from 'react';
import { handleMovieSearch,addMovieTOList } from '../actions';
class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            // showSearchResult:false,
            searchText:''
        };
    }
    handleAddTOMovies=(movie)=>{
        this.props.dispatch(addMovieTOList(movie))
    }
    handleSearch=()=>{
        const  searchText  = this.state.searchText
        console.log('search text is',this.state)
        // here we are firing the api call
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleChange = (e)=>{
        console.log('dasda',e.target.value)
        this.setState({
            searchText:e.target.value
        })
    }
render() {

    // const { showSearchResult } = this.state;
    const { result:movie,showSearchResult } = this.props.search;
    console.log('search result is',movie)
return (
    <div className='nav'>
    <div className='search-container'>
        <input onChange={this.handleChange} />
        <button id ="search-btn" onClick={this.handleSearch}>search</button>
    
    {showSearchResult && 
    <div className='search-results'>
        <div className='search-result'>
            <img  src={movie.Poster} alt='search-pic' />
            <div className='movie-info'>
                <span> movie.Title</span>
                <button onClick={()=>this.handleAddTOMovies(movie)}>Add to Movies</button>
            </div>
        </div>    
    </div>}
    </div>
    </div>
);
}
}

export default Navbar;