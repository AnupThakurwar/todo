import React, { useEffect, useState } from "react";
import MxPlayerCards from "./MxPlayerCards";
import HeadingTitle from "./HeadingTitle";
import Navbar from "./Navbar";


const Home = () => {

  //used for Filter
  const [SearchMovie, setSearchMovie] = useState("");
  const [fav, setFav] = useState([]);
  const [movieData, setMovieData] = useState([]);

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
    setMovieData(data.results);
  };

  //for filtering the data (Movie is just argument to acess data inside it)
  const MovieFilter = movieData.filter((Movie) => {
    if (SearchMovie === "") {
      return Movie;
    } else if (Movie.title.toLowerCase().includes(SearchMovie.toLowerCase())) {
      return Movie;
    }
  });
  // for adding fovorite
  const FavList = (SData) => {
    const a = [...fav, SData];
    setFav(a);
  };

  return (
    <>
      <Navbar searchData={SearchMovie} InputData={InputEvent} />
      <hr />
      <HeadingTitle title="Movies" />
      <MxPlayerCards data={MovieFilter} handle={FavList} MImg={Img} />
      <HeadingTitle title="Favorite" />
      <hr />
      <MxPlayerCards data={fav} MImg={Img} />
    </>
  );
};
export default Home;
