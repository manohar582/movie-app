import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
    
    render(){
            const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props;

            return(
                <div className="main">
                    {movies.map((movie,index) => (
                    <MovieCard  movies = {movie}
                                key = {index}
                                onIncStars = {onIncStars}
                                onDecStars = {onDecStars}
                                onClickFav = {onClickFav}
                                onClickAddtocart = {onClickAddtocart}/>

                ))}              
                </div>
            )
        }
}

export default MovieList;