import { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';

import Scheduler from '../Scheduler';
import EventPanel from '../EventPanel';
import { DateContext } from '../../contexts/date';
import DateSelector from './DateSelector';
import Calendar from './Calendar';
import { get } from '../../api';

import styles from './Hero.module.css';
import button from '../StyleComponents/Buttons.module.css';

Modal.setAppElement('#root');

const Hero = () => {
  const {
    currentDate,
    setCurrentDate,
    setDayFrames,
    updateCalendar,
    setUpdate,
  } = useContext(DateContext);

  const [dayData, setDayData] = useState({ type: 'empty' });
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const getUserEvents = async () => {
    try {
      const { year, month, dayNumber } = currentDate;
      const timestamp = new Date(year, month - 1, dayNumber).getTime();
      const response = await get(
        `http://localhost:3001/api/v1/events/${timestamp}`,
      );
      console.log(response);
      setDayFrames(response);
      setUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'none',
    },
  };

  useEffect(() => {
    getUserEvents();
  }, [currentDate.year, currentDate.month, updateCalendar]);

  return (
    <div className={styles.hero}>
      <DateSelector currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Calendar setDayData={setDayData} openModal={handleOpenModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <button className={button.close} onClick={handleCloseModal}>
          X
        </button>
        <div className={styles.modal}>
          {dayData.type === 'scheduler' && <Scheduler />}
          {dayData.type === 'event' && <EventPanel eventData={dayData.event} />}
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
