import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { Component } from "react";
import movies from "./data";

class App extends Component {

  constructor() {
        super();
        this.state = {
            movies : movies,
            cartCount: 0
        }
    }

    handleAddStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }

    this.setState({
        movies
    });
  }

  handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(movies[movieId].stars > 0){
        movies[movieId].stars -= 0.5;
    }

    this.setState({
        movies
    })
 
  }

  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
        movies
    })
  }

  handleAddtocart = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);

    if(!movies[movieId].isInCart) {
        this.setState(
            (prevState) => ({
                cartCount: prevState.cartCount + 1
            }),
            () => {
                console.log("Cart Count: ", this.state.cartCount);
            }
        );
    } else {
        this.setState(
            (prevState) => ({
                cartCount: prevState.cartCount - 1
            }),
            () => {
                console.log("Cart Count: ", this.state.cartCount);
            }
        );
    }
    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
        movies
    })
  }

  render(){
    const {movies, cartCount} = this.state;
    return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* You can add more components or features here */}
        <Navbar cartCount = {cartCount} />
        <MovieList  movies = {movies}
                    onIncStars = {this.handleAddStars}
                    onDecStars = {this.handleDecStars}
                    onClickFav = {this.handleToggleFav}
                    onClickAddtocart = {this.handleAddtocart}/>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Movie App</p>
      </footer>
    </div>
  );
  }
}

export default App;
