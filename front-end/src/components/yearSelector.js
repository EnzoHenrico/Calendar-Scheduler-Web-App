import { useState } from 'react';
import './style/yearSelector.components.css'

const YearSelector = () =>{
  let[num, setNum] = useState(2022)

  let increment = () =>{
    setNum(num + 1);
  }

  let decrement = () =>{
    setNum(num - 1);
  }
  return(
  <div className='year-selector'>
    <input type="number" value={num}></input>
    <div className='buttons'>
      <button type='button' className='arrow-button' id='up' onClick={increment}>+</button>
      <button type='button' className='arrow-button' id='down' onClick={decrement}>-</button>
    </div>
  </div>
  )
}

export default YearSelector;