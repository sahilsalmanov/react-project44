import React from 'react'
import "./Default.css"

const Default = (props) => {
    const FavouriteComponent = props.favouriteComponent
  return (
   <div className='main'>
  <input placeholder='Enter list name'>
  </input>
  <li>

  </li>
  <button>Save List</button>

   </div>
  )
}

export default Default