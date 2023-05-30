// import React from 'react'

const initialState = 10;
 const IncrementDecrement = (state = initialState, Action) => {
    switch(Action.type){
        case "Increment" : return state + 1;
        case "Decrement" : return state - 1;
        default : return state;
    }
}
export default IncrementDecrement;