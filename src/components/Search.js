import React from 'react'

const Search = ({search, onSearch}) => {
  return (
    <div className="row text-center">
      <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input id="search" type="text" onChange={onSearch} value={search} />
            <label className="form-check-label btn btn-primary mb-2" htmlFor="search">Search</label>
            <hr />
          </div>
      </form>
      </div>
  )
}

export default Search