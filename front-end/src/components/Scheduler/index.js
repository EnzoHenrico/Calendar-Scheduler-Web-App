import { useContext, useState } from 'react';
import { post } from '../../api';
import { DateContext } from '../../contexts/date';

import styles from './Scheduler.module.css';
import input from '../StyleComponents/Inputs.module.css';
import button from '../StyleComponents/Buttons.module.css';

const Scheduler = ({ modalOpened }) => {
  const [eventName, setEventName] = useState('');
  const [initHour, setInitDate] = useState('');
  const [endHour, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const { currentDate, setUpdate } = useContext(DateContext);

  const postNewEvent = async (body) => {
    try {
      await post(
        'http://localhost:3001/api/v1/events/',
        JSON.stringify(body),
      );
      setUpdate(true);
      modalOpened(false);
      alert('Event created sucessfully!');
    } catch (error) {
      alert(error.message)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const initTime = initHour.split(':');
    const endTime = endHour.split(':');
    const { year, month, day } = currentDate;

    const initDate = new Date(
      year,
      month - 1,
      day,
      parseInt(initTime[0]),
      parseInt(initTime[1]),
    );

    const endDate = new Date(
      year,
      month - 1,
      day,
      parseInt(endTime[0]),
      parseInt(endTime[1]),
    );

    if(!eventName){
      console.log('NUM TEM');
      alert('All fields required');
      return;
    }

    const payload = {
      eventName,
      initDate,
      endDate,
      description,
    };

    postNewEvent(payload);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formBody}>
      <div className={styles.formHeader}>
        <h2>Create Event</h2>
        <p>
          {currentDate.day} / {currentDate.month} / {currentDate.year}
        </p>
      </div>
      <div className={styles.divisor}></div>
      <div className={styles.inputArea}>
        <label htmlFor="name">Event name:</label>
        <input
          className={input.default}
          id="name"
          value={undefined}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className={styles.inputArea}>
        <label htmlFor="description">Description:</label>
        <input
          className={input.default}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
        />
      </div>
      <div className={styles.inputArea}>
        <label htmlFor="start">Starts from:</label>
        <input
          className={input.default}
          value={initHour}
          onChange={(e) => setInitDate(e.target.value)}
          type="time"
          placeholder="HH"
          maxLength="2"
          id="start"
        />
        to
        <input
          className={input.default}
          value={endHour}
          onChange={(e) => setEndDate(e.target.value)}
          type="time"
          maxLength="2"
        />
      </div>
      <div className={styles.sendButton}></div>
      <button className={button.send} type="submit">
        Create
      </button>
    </form>
  );
};

export default Scheduler;
