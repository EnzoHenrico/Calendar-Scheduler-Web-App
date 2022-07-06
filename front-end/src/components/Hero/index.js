import { useState, useEffect } from 'react';

import { get } from '../../api';
import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import UpdateEvent from '../UpdateEvent';
import DeleteEvent from '../DeleteEvent';
import './hero.css';


const Hero = () => {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: null,
  });
  const [dayData, setDayData] = useState({hasEvent: false, eventData: null});

  const getUserEvents = async () => {
    try {
      const { year, month } = date;
      const time = new Date(year, month, 1);
      const response = await get(
        `http://localhost:3001/api/v1/events/${time.getTime()}`,
      );
      setDays(response);
      console.log('get ok');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, []);

  return (
    <div className="hero">
      <Calendar days={days} date={date} setDate={setDate} setDayData={setDayData} />
      <div className="divisor"></div>
      {!dayData.hasEvent  ? <Scheduler date={date} /> : null}
      {dayData.hasEvent ? <UpdateEvent date={date} data={dayData.eventData}/> : null}
      {dayData.hasEvent ? <DeleteEvent date={date} data={dayData.eventData}/> : null}
    </div>

  );
};

export default Hero;
