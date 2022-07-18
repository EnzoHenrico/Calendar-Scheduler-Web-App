import { useState } from 'react';
import Modal from 'react-modal';

import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import EventPanel from '../EventPanel';
import { DateProvider } from '../../contexts/date';

import styles from './Hero.module.css';
import button from '../StyleComponents/Buttons.module.css';

Modal.setAppElement('#root');

const Hero = () => {
  const [dayData, setDayData] = useState({ type: 'empty' });
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
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

  return (
    <DateProvider>
      <div className={styles.heroContainer}>
        <Calendar setDayData={setDayData} openModal={handleOpenModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <button className={button.close} onClick={handleCloseModal}>
            X
          </button>
          <div className={styles.modalContainer}>
            {dayData.type === 'scheduler' && <Scheduler />}
            {dayData.type === 'event' && (
              <EventPanel eventData={dayData.event} />
            )}
          </div>
        </Modal>
      </div>
    </DateProvider>
  );
};

export default Hero;
