import { useState, useContext } from 'react';

import { patch } from '../../../api';
import styles from './Update.module.css';
import input from '../../StyleComponents/Inputs.module.css';
import button from '../../StyleComponents/Buttons.module.css';
import { DateContext } from '../../../contexts/date';

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
  

  return (
    <form onSubmit={handleSubmit} className={styles.formBody}>
      <div className={styles.inputArea}>
      <label htmlFor="name">Name:</label>
        <input
          className={input.default}
          placeholder={eventName}
          value={updatedEventName}
          id="name"
          onChange={(e) => setUpdateName(e.target.value)}
        />
      </div>
      <div className={styles.inputArea}>
        <label htmlFor="description">Description:</label>
        <input
          className={input.default}
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
          type="text"
          placeholder={description}
          id="description"
        />
      </div>
      <div className={styles.inputArea}>
        <label htmlFor="start">Starts from:</label>
        <input
          className={input.default}
          value={updatedInitDate}
          onChange={(e) => setUpdatedInitDate(e.target.value)}
          type="time"
          maxLength={2}
          id="start"
        />
        to
        <input
          className={input.default}
          value={updatedEndDate}
          onChange={(e) => setUpdatedEndDate(e.target.value)}
          type="time"
          maxLength="2"
        />
      </div>
      <div className={styles.sendButton}>
        <button className={button.send} type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateEvent;
