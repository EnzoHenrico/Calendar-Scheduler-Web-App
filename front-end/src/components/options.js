import './style/options.components.css'

const Options = () =>{
  return(
    <div className='options-container'>
    <div className='event-container'>
      <input value='New Event'></input>
      <div className="line"></div>
      <div className="date-inputs">
        <label for='event-starts'>Starts at:</label>
          <input type='date' id='event-starts'></input>
        <label for='event-ends'>Ends at:</label>  
          <input type='date' id='event-ends'></input>
      </div>
    </div>
    <button type='submit'>Create</button>
  </div>
  )
}

export default Options;