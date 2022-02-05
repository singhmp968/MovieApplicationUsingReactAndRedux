  import {data} from './data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import {addMovies,showMovies,showFav} from '../actions'
class App extends React.Component {
  componentDidMount() {
    
    // WHEN WE DISPATCH ACTION IMMEDITELY after this call back is called
    const {store} = this.props;
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
    
  
  }
   isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie)
    if(index!==-1){
      // found the movie
      return true;
    }
    return false;
    }


    showMovie= () =>{
     this.props.store.dispatch(showMovies())
     console.log('hi clicke me ',this.props.store.getState())
    }
    showFavourite=()=>{
      this.props.store.dispatch(showFav())
     console.log('hi clicke me ',this.props.store.getState())

    }

    render(){
    //4.THIS WILL EXECUTEBEACAUESE WE ARE FORCELLY UPDATIN THE COMP
    console.log('RENDER',this.props.store)
    //1.RENDER WILL EXECUTE as soon as the componenet 
   //************NR */
    console.log('STATE',this.props.store.getState())// now the  state will be 

  // 0const movies = this.props.store.getState();
  const {list,favourites} = this.props.store.getState();
  
  // console.log('Moviess==>',list)
  // console.log('daya\ is',this.props)

  const {showFavourites} =this.props.store.getState();
  console.log('show===> ',showFavourites)
   let movieToBeLoop= showFavourites?favourites:list
  return (
    <div className="App">
        <Navbar />
        <div className="main">
            <div className="main">
                  <div className="tabs">
                      <div className="tab" onClick={this.showMovie}>Movies</div>
                      <div className="tab" onClick={this.showFavourite} >Favourites</div>
                  </div>
                  <div className="list">
                    {movieToBeLoop.map((movie,index)=>( // awways remenber here we need to have () bracket as we are passing arrow function not {} other wise you will get error
                     <MovieCard
                       movie = {movie}
                       key={`movies-${index}`}
                       dispatch = {this.props.store.dispatch}
                      isFavourite = {this.isMovieFavourite(movie)}
                       />
                    ))}
                  </div>
            </div>
        </div>
    </div>
  );
  }
}

export default App;
