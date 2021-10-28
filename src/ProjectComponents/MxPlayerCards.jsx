import React, {useState} from 'react';
import FavoriteBtn from './FavoriteBtn';
import FavoriteMovie from './FavoriteMovie';
import HeaderBar from './HeaderBar';
import "./MxPlayer.css";
import SearchBar from './SearchBar';




const MxPlayerCards=(props)=>{
     
return(
  <>
  <div className ="scrollMenu">
  {props.data.map((items,index)=>{
    return(
      <>
  <div className="cards" key={index} >
    <div className="card" key={index}>
        <img src={items.imgsrc} alt="webseries" className="card_img" />
        <div className="card_info" key={index}>
            <div className="card_title_atr">
            <span className="card_title">{items.title} </span>
            </div>
            <h3 className="card_sabout">{items.sabout} </h3>
        </div>
        <a href = {items.link} target="_Blank">
                <button>Watch Now</button>
         </a><span>
         {/* <button onClick={()=>{props.fav(items)}}>My Favorite</button> */}
           <button onClick={()=>{props.handle(items)}}>My Favorite</button>
          </span>
    </div>
  </div>
  </>
  )})}
 
  </div>
  </>
); 




 






// return(
//       <>
      
//       <div className="cards">
//         <div className="card">
//             <img src={items.imgsrc} alt="webseries" className="card_img"/>
//             <div className="card_info">
//                 <span className="card_title">{items.title}</span>
//                 <h3 className="card_sabout">{items.sabout}</h3>
//             </div>
//             <a href = {items.link} target="_Blank">
//                     <button>Watch Now</button>
//              </a>
//              <button onClick={items.data}>My Favorite</button>
//         </div>
//       </div>
        
//       </>
//   );  
}

export default MxPlayerCards; 