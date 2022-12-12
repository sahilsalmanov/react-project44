import React from "react";
import './SearchBox.css'
 const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
         <p>Search movie by title: </p>
            <input 
            className="form-control"
            name="file"
             value={props.value}
             onChange = {(event) => props.setSearchValue(event.target.value)}
              placeholder="Type to search..." 
              />
        </div>
    )
 }
 export default SearchBox