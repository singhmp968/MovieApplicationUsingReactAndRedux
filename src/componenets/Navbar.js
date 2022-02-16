import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {StoreContext,connect} from '../index'
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
}/*
class NavbarWrapper extends React.Component{
    render(){
        return(
            <StoreContext.Consumer>
                {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search} />}
            </StoreContext.Consumer>
        )
    }
}
export default NavbarWrapper;
*/
function mapStateToProps(state){
    return{
        movies:state.movies, // state is our root state
        search:state.search
    }
     
}
const connectedAppComponenet = connect(mapStateToProps)(Navbar) // here we need to tell what data we need from store and which component we want to connect this component to the store
export default connectedAppComponenet;
