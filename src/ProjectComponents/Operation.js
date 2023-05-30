import React from 'react'
import "./IncDec.css"
import { useSelector, useDispatch } from 'react-redux'
import { IncrementFunction, DecrementFunction } from './Action'

 const Operation = () => {
     const state = useSelector((state)=>
            state.IncrementDecrement)
     const dispatch =  useDispatch();
  return (
    <>
    <div  >
      <h2 className='text-light'>Increment Decrement Counter</h2>
      <h5  className='text-light'> using React and Redux</h5>
      <hr/>
          <div className='all'>
              <button onClick={()=>dispatch(DecrementFunction())}>-</button>
              <input type="text"  value={state}/>
              <button onClick={()=>dispatch(IncrementFunction())}>+</button>
          </div>
    </div>
    </>
  )
}
export default Operation;