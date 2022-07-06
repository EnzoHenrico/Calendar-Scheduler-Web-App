import { useState, useEffect } from 'react';
import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import './hero.css';

import { get } from '../../api';

const Hero = () => {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: null,
  });

  const getUserEvents = async () => {
    try {
      console.log(date);
      const { year, month } = date;
      const time = new Date(year, month, 1);
      const response = await get(
        `http://localhost:3001/api/v1/events/${time.getTime()}`,
      );
      setDays(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, []);

  return (
    <div className="hero">
      <Calendar days={days} date={date} setDate={setDate} />
      <div className="divisor"></div>
      {date.day ? <Scheduler date={date} /> : null}
    </div>
  );
};

export default Hero;
