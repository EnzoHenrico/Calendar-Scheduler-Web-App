import { useState, useEffect } from 'react';

import { get } from '../../api';
import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import UpdateEvent from '../UpdateEvent';
import './hero.css';

const Hero = () => {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const [dayData, setDayData] = useState({ hasEvent: false, eventData: null });

  const getUserEvents = async () => {
    try {
      const { year, month } = date;
      const time = new Date(year, month - 1, 1).getTime();

      const response = await get(`http://localhost:3001/api/v1/events/${time}`);
      setDays(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, [date.year, date.month]);

  return (
    <div className="hero">
      <Calendar
        days={days}
        date={date}
        setDate={setDate}
        setDayData={setDayData}
      />
      <div className="divisor"></div>
      <div className="options">
        {!dayData.hasEvent ? <Scheduler date={date} /> : null}
        {dayData.hasEvent ? (
          <UpdateEvent date={date} data={dayData.eventData} />
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
