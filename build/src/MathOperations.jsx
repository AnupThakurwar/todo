import React from 'react';

 function Add(a,b){
   var sum = a + b;
    return sum;
 }

 function Sub(a,b){
    var sub = a - b;
    return(sub);
 }

 function Mul(a,b){
   var mul = a * b;
    return(mul);
 }

 function Divr(a,b){
    var divr = a / b;
    return(Math.round(divr));
 }

 export {Add,Sub,Mul,Divr}