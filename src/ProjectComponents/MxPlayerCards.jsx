import React from 'react';
import "./MxPlayer.css";



const MxPlayerCards=(props)=>{
     
return(
  <>
    
  {props.data.map((items)=>{
    return(
  <div className="cards">
    <div className="card">
        <img src={items.imgsrc} alt="webseries" className="card_img"/>
        <div className="card_info">
            <span className="card_title">{items.title}</span>
            <h3 className="card_sabout">{items.sabout}</h3>
        </div>
        <a href = {items.link} target="_Blank">
                <button>Watch Now</button>
         </a>
         <button onClick={()=>props.fav(items)}>My Favorite</button>
    </div>
  </div>
  )})}
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