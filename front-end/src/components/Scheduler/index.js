import './scheduler.css';
import { useState } from 'react';
import { post } from '../../api';

const Scheduler = ({ date, day }) => {
  const [eventName, setEventName] = useState('');
  const [initHour, setInitDate] = useState('');
  const [endHour, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const postNewEvent = async (body) => {
    try {
      const response = await post(
        'http://localhost:3001/api/v1/events/',
        JSON.stringify(body),
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const initTime = initHour.split(':');
    const endTime = endHour.split(':');
    const { year, month, day } = date;

    const initDate = new Date(
      year,
      month,
      day,
      parseInt(initTime[0]),
      parseInt(initTime[1]),
    );

    const endDate = new Date(
      year,
      month,
      day,
      parseInt(endTime[0]),
      parseInt(endTime[1]),
    );

    const options = {
      eventName,
      initDate,
      endDate,
      description,
    };

    postNewEvent(options);
  };

  return (
    <form onSubmit={handleSubmit} className="options-container">
      <div className="event-container">
        <input
          placeholder="New Event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        ></input>
        <div className="line"></div>
        <div className="date-inputs">
          <label htmlFor="event-starts">Starts at:</label>
          <input
            value={initHour}
            onChange={(e) => setInitDate(e.target.value)}
            type="time"
            placeholder="HH"
            maxLength={2}
            id="event-starts"
          ></input>
          <label htmlFor="event-ends">Ends at:</label>
          <input
            value={endHour}
            onChange={(e) => setEndDate(e.target.value)}
            type="time"
            placeholder="HH"
            maxLength="2"
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
      <button type="submit">Create</button>
    </form>
  );
};

export default Scheduler;
