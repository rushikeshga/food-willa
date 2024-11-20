import React, { useContext, useState } from 'react'
import classes from './AppBody.module.css'
import UserContext from '../../Utils/UserContext';
const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");
  var User = useContext(UserContext);
  return (
    <div className={classes.SearchBar}>
        <input type='text' placeholder='Find food here...' data-testId="searchBar" className = "border-2 border-emerald-950 rounded"onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input><button className='m-2 border-2 border-orange-700 rounded bg-orange-700 text-white hover:bg-orange-800 w-28' onClick={()=>{
            props.onFilterChange(searchText);
          }}>Search</button>
          
    </div>
  )
}

export default SearchBar