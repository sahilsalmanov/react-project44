import React from 'react'
import './MovieList.css'

const MovieList = (props) => {
const FavouriteComponent = props.favouriteComponent

    return (
        <>
     {props.movies.map((movie,index) => (
    <div className='image-container d-flex justify-content-start m-3'>
       <div className='general'>
           <div className='general-left'>
   <img src={movie.Poster} alt = 'movie'></img>
   </div>
   <div className='general-right'>
   <p>{movie.Title} </p>
   <button onClick= {() => props.handleFavouritesClick(movie)} 
    className='overlay d-flex align-item-center justify-content'
    >
    <FavouriteComponent/></button>
   </div>
   </div>
   </div>
   ))}
        </>
    )
}
export default MovieList