import React from "react";





const MovieCard = ({movie_test}) => {


return(

    <div className='movie'>

        <div>
        <p>{movie_test.Year}</p>
        </div>

        <div>
        <img src={movie_test.Poster != 'N/A' ? movie_test.Poster : 'https://via.placeholder.com/400'} alt = {movie_test.Title} />
        </div>

        <div>
        <span>{movie_test.Type} </span>
        <h3> {movie_test.Title} </h3>
        </div>

    </div>
);
}


export default MovieCard;