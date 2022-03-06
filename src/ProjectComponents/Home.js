import React, { useEffect, useState } from "react";
import SData from "./MxPlayerData";
import MxPlayerCards from "./MxPlayerCards";
import HeaderBar from "./HeaderBar";
import SearchBar from "./SearchBar";
import HeadingTitle from "./HeadingTitle";
import Navbar from "./Navbar";
import Corosuel from "./Corosuel";
import FavoriteMovie from "./FavoriteMovie";

const Home = () => {
  // //for favorite movies
  // const [fav, setfav] = useState([]);
  //used for Filter
  const [SearchMovie, setSearchMovie] = useState("");
  const [fav, setFav] = useState([]);
  const [movieData, setMovieData] = useState([]);

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

  useEffect(() => {
    getApiData();
  }, []);

  const Img = `https://image.tmdb.org/t/p/w500`;
  const getApiData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=1"
    );
    const data = await response.json();
    //  console.log(data.results)
    setMovieData(data.results);
  };
  // console.log(movieData)
  //for filtering the data (Movie is just argument to acess data inside it)
  const MovieFilter = movieData.filter((Movie) => {
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
  // console.log(fav);
  return (
    <>
      <Navbar searchData={SearchMovie} InputData={InputEvent} />

      {/* <HeaderBar/> */}
      <hr />
      <HeadingTitle title="Movies" />
      {/* <SearchBar searchData={SearchMovie} InputData={InputEvent} /> */}
      <MxPlayerCards data={MovieFilter} handle={FavList} MImg={Img} />

      <HeadingTitle title="Favorite" />
      <hr />
      <MxPlayerCards data={fav} MImg={Img} />
    </>
  );
};
export default Home;
