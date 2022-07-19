import { useContext, useEffect } from 'react';

import { get } from '../../api';
import { DateContext } from '../../contexts/date';
import DateSelector from './DateSelector';
import RenderCalendar from '../RenderCalendar';
import styles from './Calendar.module.css';

const Calendar = ({ setDayData, openModal }) => {
  const {
    currentDate,
    setCurrentDate,
    setDayFrames,
    updateCalendar,
    setUpdate,
  } = useContext(DateContext);

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

  useEffect(() => {
    getUserEvents();
  }, [currentDate.year, currentDate.month, updateCalendar]);

  return (
    <div className={styles.calendar}>
      <div className="date-selectors">
        <DateSelector
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div className={styles.board}>
        <RenderCalendar setDayData={setDayData} openModal={openModal} />
      </div>
    </div>
  );
};

export default Calendar;
