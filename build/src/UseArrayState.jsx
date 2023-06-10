import react, { useState } from "react";

function UseArrayState(){

   const myBioData = [
   
    {
        Id:0,
        myName:"Anup",
        MyAge:30,
        MyBranch:"Ece"
    },
    {
        Id:1,
        myName:"Rahul",
        MyAge:30,
        MyBranch:"Electronics"
    }

   ]
   
   const [myArr, setmyArr] =  useState(myBioData);
  
   const clearArray =() =>{
      
      setmyArr([]);
      console.log(myBioData);
    
   }
  
    return(
        <>
        {
            myArr.map((curEle) =>{
              
                return  (
                <>
                <h1 key={curEle.Id} >My name is {curEle.myName} and my age is {curEle.MyAge} studied in {curEle.MyBranch}</h1>
                <button onClick={clearArray}>ClickMe to Clear</button>
                </>
                    )
                }
               
            )
        }<br/><br/>
            {/* <button>ClickMe to Clear</button> */}
        </>
    );
}

export default UseArrayState;