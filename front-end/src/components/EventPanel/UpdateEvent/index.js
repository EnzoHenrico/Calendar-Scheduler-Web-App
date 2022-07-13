import { useState, useContext } from 'react';

import './update.css';
import { DateContext } from '../../../contexts/date';
import { patch, reqDelete } from '../../../api';

const UpdateEvent = ({ data }) => {
  const { setUpdate } = useContext(DateContext);
  const { _id, eventName, initDate, endDate, description } = data;

  const [updatedEventName, setUpdateName] = useState(eventName);
  const [updatedInitDate, setUpdatedInitDate] = useState(initDate);
  const [updatedEndDate, setUpdatedEndDate] = useState(endDate);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const updateValues = async (body) => {
    try {
      const response = await patch(
        `http://localhost:3001/api/v1/events/${_id}`,
        JSON.stringify(body),
      );
      setUpdate(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEvent = async (eventId) => {
    try {
      const response = await reqDelete(
        `http://localhost:3001/api/v1/events/${eventId}`,
      );
      setUpdate(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const update = {
      eventName: updatedEventName,
      initDate: updatedInitDate,
      ednDate: updatedEndDate,
      description: updatedDescription,
    };
    console.log('BODY', update);
    updateValues(update);
  };
  const handleDelete = () => {
    deleteEvent(data._id);
  };

  return (
    <form onSubmit={handleSubmit} className="update-container">
      <div className="event-container">
        <h3>Update Event</h3>
        <input
          placeholder={eventName}
          value={updatedEventName}
          onChange={(e) => setUpdateName(e.target.value)}
        ></input>
        <div className="line"></div>
        <div className="date-inputs">
          <label htmlFor="event-starts">Starts at:</label>
          <input
            value={updatedInitDate}
            onChange={(e) => setUpdatedInitDate(e.target.value)}
            type="time"
            maxLength={2}
            id="event-starts"
          ></input>
          <label htmlFor="event-ends">Ends at:</label>
          <input
            value={updatedEndDate}
            onChange={(e) => setUpdatedEndDate(e.target.value)}
            type="time"
            maxLength="2"
            id="event-ends"
          ></input>
        </div>
        <div className="desciption-input">
          <label htmlFor="event-description">Description:</label>
          <input
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            type="text"
            placeholder={description}
            id="event-description"
          ></input>
        </div>
      </div>
      <button className="update-button" type="submit">
        Update
      </button>
      <button type="button" className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
};

export default UpdateEvent;
