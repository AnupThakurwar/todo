import React, { useState } from "react";
import SData from "./MxPlayerData";
import MxPlayerCards from "./MxPlayerCards";
import HeaderBar from "./HeaderBar";
import SearchBar from "./SearchBar";
import HeadingTitle from "./HeadingTitle";

const Home = () => {
  // //for favorite movies
  // const [fav, setfav] = useState([]);
  //used for Filter
  const [SearchMovie, setSearchMovie] = useState("");
  const [fav, setFav] = useState([]);

  // //  for Object Callback
  // const FavList = (movie) => {
  //   const a = [...fav, movie];
  //   // console.log(movie)
  //   setfav(a);
  //   }

  //for Input Event
  const InputEvent = (event) => {
    const TypedName = event.target.value;
    setSearchMovie(TypedName);
  };

  //for filtering the data (Movie is just argument to acess data inside it)
  const MovieFilter = SData.filter((Movie) => {
    if (SearchMovie === "") {
      return Movie;
    } else if (Movie.title.toLowerCase().includes(SearchMovie.toLowerCase())) {
      // console.log(
      //   Movie.title.toLowerCase().includes(SearchMovie.toLowerCase())
      // );
      return Movie;
    }
  });
  // for adding fovorite
  const FavList = (SData) => {
    const a = [...fav, SData];
    // console.log(movie)
    setFav(a);
  };
  console.log(fav);
  return (
    <>
      <HeaderBar />
      <hr />
      <HeadingTitle title="Movies" />
      <SearchBar searchData={SearchMovie} InputData={InputEvent} />
      <MxPlayerCards data={MovieFilter} handle={FavList} />

      <HeadingTitle title="Favorite" />
      <hr />
      <MxPlayerCards data={fav} />
    </>
  );
};
export default Home;
