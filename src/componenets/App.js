  import {data} from './data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
class App extends React.Component {
  componentDidMount() {
    
    // WHEN WE DISPATCH ACTION IMMEDITELY after this call back is called
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATING');
      // we dont we have use this as we have forceupdate as it is recommended
      this.forceUpdate()
    });

    store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    });
    console.log('STATE',this.props.store.getState())
    // FLOW 
    //1.store.dispatch({})
    //2.THEN SUBSCRPTION IS CALLED  store.subscribe(()=>{})
    //3.console.log('STATE',this.props.store.getState())
    
  
  }
  render(){
    //4.THIS WILL EXECUTEBEACAUESE WE ARE FORCELLY UPDATIN THE COMP
    console.log('RENDER')
    //1.RENDER WILL EXECUTE as soon as the componenet 

  const movies = this.props.store.getState();
  console.log('Moviess==>',movies)
  console.log('daya\ is',this.props)
  return (
    <div className="App">
        <Navbar />
        <div className="main">
            <div className="main">
                  <div className="tabs">
                      <div className="tab">Movies</div>
                      <div className="tab">Favourites</div>
                  </div>
                  <div className="list">
                    {movies.map((movie,index)=>( // awways remenber here we need to have () bracket as we are passing arrow function not {} other wise you will get error
                     <MovieCard  movie = {movie} key={`movies-${index}`} />
                    ))}
                  </div>
            </div>
        </div>
    </div>
  );
  }
}

export default App;
