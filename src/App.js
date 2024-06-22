import logo from './logo.svg';
import './App.css';

import { useState , useEffect } from 'react';
import MovieCard from './MovieCard';

// const Person = (props) => {

//   return(
//     <>
//     <h1> Name : {props.name} </h1>
//     <h2> Age : {props.age} </h2> 
//     </>
//   );

// }


// bc6431


const API_URL =  'http://www.omdbapi.com/?apikey=bc6431';

const movie_test = {
            "Title": "Italian Spiderman",
            "Year": "2007",
            "imdbID": "tt2705436",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
        }  

const App = () => {


  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}'`);
    const data = await response.json();
    
    
    console.log(data);
    setMovies(data.Search);
    }
    
  useEffect(() =>
  {
    searchMovies('Spiderman');

    }, []);
    
    return (
      <div className="App">
       <h1> MovieLand</h1>

       <div className='search'>
          <input
            placeholder = "Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg" alt="search" onClick={() => searchMovies(searchTerm)} />
       </div>

       {
         movies?.length > 0 
         ? (
          <div className='container'>
            {movies.map((movie_test) => (
               <MovieCard movie_test={movie_test}/> 
            ))}
         </div>

         ) : (
          <div className='empty'>

            <h2>No Movies Found</h2>

            </div>
         )
       }




    </div>
  );
  }

  export default App;


  // const name = "Ann";
  
  // const[counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert('Reload')
  // });
