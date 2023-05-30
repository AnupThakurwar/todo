import React,{useState} from "react";
import FavoriteMovie from "./FavoriteMovie";
import HeaderBar from "./HeaderBar";
import MxPlayerCards from "./MxPlayerCards";

const FavoriteBtn = (props) => {
  
 //for favorite movies
  
  const [favbtn, setfav] = useState([]);
  // const fig = props.fav
  // console.log(fig)
  // const fagh = props.favItem
  // console.log(fagh)
  
  //  on Click Event 
  const FavList = (fig2) => { 
    const a = [...favbtn, fig2];  
    setfav(a)
    console.log(fig2)
    }
    
  console.log(favbtn)
  return (
    <>
        <FavoriteMovie fav = {favbtn}/>
        <button onClick={()=>{FavList(props.fav)}}>My Favorite</button>
        {/* <MxPlayerCards data = {favbtn}/> */}
      
    </>
  );

}
export default FavoriteBtn;
