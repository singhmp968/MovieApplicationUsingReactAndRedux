import React, { Component } from 'react';
import { handleMovieSearch } from '../actions';
class Navbar extends Component {

    constructor(props){
        super(props)
        this.state = {
            showSearchResult:true,
            searchText:''
        };
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
return (
    <div className='nav'>
    <div className='search-container'>
        <input onChange={this.handleChange} />
        <button id ="search-btn" onClick={this.handleSearch}>search</button>
    </div>
    </div>
);
}
}

export default Navbar;