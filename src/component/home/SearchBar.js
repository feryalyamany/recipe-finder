import React, { useState } from "react";

const SearchBar = ({value, isLoading, searchHandler, onChange}) => {

  return (
   
   
    <div onKeyUp={searchHandler}  className=" input-line mt-5 group">
      <div className="search-results"></div>
      <i className="fa-regular fa-x"></i>
      <input
        className="search-input input-alt"
        placeholder="search here"
        type="text"
        onChange={onChange}
        value={value}
        // disabled={isLoading}
      />
      <span className="input-border input-border-alt"></span>
      
    </div>
  
  );
};

export default SearchBar;
