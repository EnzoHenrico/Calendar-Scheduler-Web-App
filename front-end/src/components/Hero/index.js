import { useState } from 'react';

import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import EventPanel from '../EventPanel';
import { DateProvider } from '../../contexts/date';
import './hero.css';

const Hero = () => {
  const [dayData, setDayData] = useState({ type: 'empty' });

  return (
    <DateProvider>
      <div className="hero">
        <Calendar setDayData={setDayData} />
        <div className="divisor"></div>
        <div className="options">
          {dayData.type === 'scheduler' && <Scheduler />}
          {dayData.type === 'event' && <EventPanel eventData={dayData.event} />}
        </div>
      </div>
    </DateProvider>
  );
};

export default Hero;
