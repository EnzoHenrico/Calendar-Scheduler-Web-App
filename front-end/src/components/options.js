import './style/options.components.css';
import { useState } from 'react';

const Options = () => {
  const [newEventName, setNewEventName] = useState('New Event');
  const [initDate, setInitDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const options = { newEventName, initDate, endDate, description };
    console.log(options);
  };

  return (
    <div className="options-container">
      <div className="event-container">
        <input
          value={newEventName}
          onChange={(e) => setNewEventName(e.target.value)}
        ></input>
        <div className="line"></div>
        <div className="date-inputs">
          <label htmlFor="event-starts">Starts at:</label>
          <input
            value={initDate}
            onChange={(e) => setInitDate(e.target.value)}
            type="date"
            id="event-starts"
          ></input>
          <label htmlFor="event-ends">Ends at:</label>
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            id="event-ends"
          ></input>
        </div>
        <div className="desciption-input">
          <label htmlFor="event-description">Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="event-description"
          ></input>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default Options;
