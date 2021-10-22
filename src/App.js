import React, { useEffect, useState } from 'react';
import MxPlayerCards from './ProjectComponents/MxPlayerCards';
import './App.css';
import SData from './ProjectComponents/MxPlayerData';
import "./ProjectComponents/MxPlayer.css";


 


function App() {

   const [SearchMovie,setSearchMovie] = useState("");
   
   const[Movie,setMovie] = useState([]);
   const[fav,setfav] = useState([]);



   useEffect(()=>{
      getApiData();
   },[])

   const getApiData = async() =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1')
      const responseJason = await response.json();
      //  console.log(responseJason.results);
      setMovie(responseJason.results);
   }


   const InputEvent=(event)=>{
      const Movie = event.target.value;
      setSearchMovie(Movie);

   }

   //for filtering the data
   const MovieFilter = SData.filter((Movie) =>{
      
      if(SearchMovie === ""){
         return Movie
      }
      else if( Movie.title.toLowerCase().includes(SearchMovie.toLowerCase()))
      {
         return  Movie.title.toLowerCase().includes(SearchMovie.toLowerCase());
      }
   }) 

   const FavList = (movie) =>{
      
      const a = [...fav,movie]
      setfav(a);
      
        
   }
  


  return (
   <>
      <h1 className="heading_style">Welcome to <span className="headingSub_style">MX</span><span className="headingSub2_Style">Player</span></h1>
      <h5 className ="headingSub3_Style">next Level of Experience <span > <input type="text" placeholder="search Movies Here" onChange={InputEvent} value={SearchMovie} className="search_bar"/></span></h5>
      
      <ul className="headingSub2_Style">
       <a>
          <li>Home</li> 
       </a>       
       <a href="https://www.mxplayer.in/web-series" >   
          <li>WebSeries</li>
       </a>
      
       <a href="https://www.mxplayer.in/tv-channels" >
          <li>News</li>
        </a>  
       
        <a href="https://www.mxplayer.in/music" >
          <li>Music</li>
        </a>  
        
        <li>My Favorite</li>
        
      </ul>

      {/* { MovieFilter.map((val)=>{
        return( 
         
            <MxPlayerCards
         imgsrc={val.imgsrc} 
         title={val.title}
         sabout={val.sabout} 
         link={val.link} 
        
           />
          );
      })     }  */}

      <MxPlayerCards
       data = {MovieFilter}
       fav = {FavList}
           />
     
     <MxPlayerCards
       data = {fav}
       fav = {FavList}
           />
     
   </>
  ); 
}


export default App;
