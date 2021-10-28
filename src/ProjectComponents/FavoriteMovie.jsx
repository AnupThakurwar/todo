import React, { useState } from "react";
import HeaderBar from "./HeaderBar";
import MxPlayerCards from "./MxPlayerCards";

const FavoriteMovie=(props)=>{
    const [fav, setFav] = useState([]);

    const FavList = (SData) => {
        const a = [...fav, SData];
        // console.log(movie)
        setFav(a);   
        }
          console.log(fav)
    return(
        <>  
                 <HeaderBar />
                <MxPlayerCards handle={FavList} data={fav}/>
        </>
    )
}
export default FavoriteMovie;