import { connect } from 'react-redux';
import {data} from './data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies,setShowFavourite} from '../actions'
// import {StoreContext,connect} from '../index'
import { search } from '../reducers';
class App extends React.Component {
  // here we are calling the calling/****vvvvvv Important in the ***&&&%%%###$$$onChangeTab***&&&%%%###$$$ and then we are passing the vallue */
  componentDidMount() {
  // this.props.store.subscribe(()=>this.forceUpdate());
   this.props.dispatch(addMovies(data))
   
    /*
    // WHEN WE DISPATCH ACTION IMMEDITELY after this call back is called
    const {store} = this.props.store;
    store.subscribe(()=>{
      console.log('UPDATING');
      // we dont we have use this as we have forceupdate as it is recommended
      this.forceUpdate()
    });

     store.dispatch(
      // making dynamic i.e dispatching the actions in the actions 
      addMovies(data)
       
      //{
    //   type:'ADD_MOVIES',
    //   movies:data
    // }
    // creating dynamic function
    );
    console.log('STATE',this.props.store.getState())// now the  state will be 
    // FLOW 
    //1.store.dispatch({})
    //2.THEN SUBSCRPTION IS CALLED  store.subscribe(()=>{})
    //3.console.log('STATE',this.props.store.getState())
    */
  
  }
  // on changeTab
  onChangeTab=(val)=>{
    this.props.dispatch(setShowFavourite(val))
  }
  isMovieFavoirite =(movie)=>{
    const {movies} = this.props;
    const {favourites} = movies;
    const index = favourites.indexOf(movie)
    if(index!==-1){
      // found the movie
      return true
    }
    return false
  }

  render(){
    //4.THIS WILL EXECUTEBEACAUESE WE ARE FORCELLY UPDATIN THE COMP
    console.log('RENDER')
    //1.RENDER WILL EXECUTE as soon as the componenet 

  // 0const movies = this.props.store.getState();
  const {movies,search} = this.props; // {movies:{},search:{}}
  console.log('Moviess==>',movies)
  console.log('daya\ is',this.props);
  const {list,favourites,setShowFavourites} = movies
  const displayMovies = setShowFavourites?favourites:list
  // we can use it only inside the render methods
            return (
            <div className="App">
                <Navbar search={search} />
                <div className="main">
                    <div className="main">
                          <div className="tabs">
                            {/* vvvi o how to pass the value inthe required functuon  */}
                              <div className={`tab ${setShowFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                              <div className={`tab ${setShowFavourites?'active-tabs':''}`} onClick={()=> this.onChangeTab(true)}>Favourites</div>
                            {/* vvvi o how to pass the value inthe required functuon  */}
        
                          </div>
                          <div className="list">
                            {displayMovies.map((movie)=>( // awways remenber here we need to have () bracket as we are passing arrow function not {} other wise you will get error
                             <MovieCard  
                              movie = {movie}
                              key={movie.imdbID}
                              dispatch = {this.props.dispatch}
                              isFavourite = {this.isMovieFavoirite(movie)}  
                              />
                            ))}
                          </div>
                          {displayMovies.length===0?<div className='no-movies'>No movie to dispaly</div>:null}
                    </div>
                </div>
            </div>
          ); 
  }
}
/*
class AppWrapper extends React.Component{
  render() {
    return (
      <StoreContext.Consumer>
        {(store)=><App store={store} />}
      </StoreContext.Consumer>
    );
  }
}*/
//function callback(state){
  function mapStateToProps(state){

// this callback will tell what data we want from store
return{
  movies:state.movies, // state is our root state
  search:state.search
}
};
// App is the name on App componenet
// here we are telling that we need  the state property like movies:state.movies property inside our App componenet
const connectedAppComponenet = connect(mapStateToProps)(App) // here we need to tell what data we need from store and which component we want to connect this component to the store
export default connectedAppComponenet;
// export default App;
//export default AppWrapper;
