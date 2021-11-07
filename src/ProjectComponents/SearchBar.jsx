import React, { useState } from "react";
import MxPlayerCards from "./MxPlayerCards";
import SData from "./MxPlayerData";

const SearchBar = (props) => {
  //   const [SearchMovie, setSearchMovie] = useState("");

  // const InputEvent = (event) => {
  //   const TypedName = event.target.value;
  //   setSearchMovie(TypedName);
  // };

  //for filtering the data (Movie is just argument to acess data inside it)
  // const MovieFilter = SData.filter((Movie) => {
  //   if (SearchMovie === "") {
  //     return Movie;
  //   } else if (Movie.title.toLowerCase().includes(SearchMovie.toLowerCase())) {
  //     // console.log(Movie.title.toLowerCase().includes(SearchMovie.toLowerCase()) )
  //     return Movie.title.toString.toLowerCase().includes(SearchMovie.toString.toLowerCase());
  //   }
  // }).map((Movie) => {
  //   return Movie;
  // });

  // console.log(MovieFilter);

  return (
    <>
      {/* <input
        type="text"
        placeholder="search Movies Here"
        onChange={props.InputData}
        value={props.searchData}
        className="search_bar"
      /> */}

      <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" placeholder="search Movies Here"  onChange={props.InputData} value={props.searchData}/>  
          <span><i class="fas fa-search"></i></span>
        </div>  
       
      </div>
    </>
  );
};

export default SearchBar;
