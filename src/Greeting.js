import React from "react";




const Greeting = () =>{
    
    let currentDate = new Date(2021,10,14,9);
    let currentTime = new Date().toLocaleTimeString();
    const img1 = "https://picsum.photos/200/300";

    let currHrs = currentDate.getHours();
    let greeting = '';

    const cssStyle = {
        
    }

    if(currHrs >= 1 && currHrs <= 12){
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (currHrs >= 12 && currHrs <=17){ 
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else {
        greeting ="Good Night";
        cssStyle.color = 'black';
    }
   
   const heading = {
       textAlign: 'center',
       color: '',
       textTransform: 'capitalize',
       fontWeight: 'bold',
       textShadow:'0px 2px 4px',
       margin:'70px,0px',
       fontFamily: 'Andada Pro, serif'
   }
  
   return (
        <>
        <h1 style = {heading}>Hello Sir ,<span style={cssStyle}>{greeting}</span></h1>
        
        {/* <h2>{`today's time is ${currentTime} and date is ${currentDate}`}</h2> */}
        <image src={img1} alt="random image"/>
        
        </>
    ); 
}

console.log(Greeting());

export default Greeting;