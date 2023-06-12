import React from 'react'
import "./SearchResults.css"

const SearchResults = ({result}) => {
  return ( 
    <div className='search-result' onClick={(e) => alert(`you clicked on ${ result.name }`)}>
      <p className='result-name'>{result.name}</p>
      {/* <p>{result.location}</p> */}
      <p className='result-address'>{result.address}</p>
      {/* <p>{result.state.name}</p> */}
    </div>
  )
}

export default SearchResults
