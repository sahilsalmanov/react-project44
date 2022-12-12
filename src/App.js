import React, {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList/MovieList';
import MovieListHeading from './components/MovieListHeading/MovieListHeading';
import SearchBox from './components/SearchBox/SearchBox';
import AddFavourites from './components/AddFavourites/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites/RemoveFavourites';
import Default from './components/Default/Default';

const App = () => {
  const [movies,setMovies] = useState([]);
  const [favourites , setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')


const getMovieRequest = async (searchValue) => {
  const url =`http://www.omdbapi.com/?s=${searchValue}&apikey=db49ed09`
  const response = await fetch(url)
  const responsJson = await response.json()
if(responsJson.Search) {
  setMovies(responsJson.Search)
}
}


useEffect(() => {
  getMovieRequest(searchValue);
},[searchValue])

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites,movie]
  setFavourites(newFavouriteList)
}
const removeFavouriteMovie = (movie) => {
const newFavouriteList = favourites.filter(
  (favourite) => favourite.imdbID !== movie.imdbID
  )
setFavourites(newFavouriteList)
}

  return (
     <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = 'MUSTSEE' />
      </div>
   <div className='section'>
    <div className='section1'>
   <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
    <div className='row'>
    <MovieList
     movies = {movies} 
    handleFavouritesClick = {addFavouriteMovie}
     favouriteComponent = {AddFavourites}/>
   </div>
   </div>
  <div className='section2'>
  <div className='row d-flex align-items-center mt-4 mb-4'>
    <MovieListHeading heading = 'Favourites' />
  </div>
    {/* <Default /> */}
 <div className='row siyahi'>
 <div className='main'>
  <input className='input' placeholder='Enter list name'>
  </input>
  <li>
  <MovieList
movies = {favourites}
handleFavouritesClick = {removeFavouriteMovie}
favouriteComponent = {RemoveFavourites}
 />
  </li>
  <button disabled className='button'>Save List</button>
 <a href='index2.html'>Go To List</a>
   </div>
 </div>
  </div>
  </div>
  </div>
  )
}

export default App