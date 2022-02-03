import {data} from './data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
function App() {
  console.log('daya\ is',data)
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
                    {data.map(movie=>( // awways remenber here we need to have () bracket as we are passing arrow function not {} other wise you will get error
                     <MovieCard  movie = {movie} />
                    ))}
                  </div>
            </div>
        </div>
    </div>
  );
}

export default App;
