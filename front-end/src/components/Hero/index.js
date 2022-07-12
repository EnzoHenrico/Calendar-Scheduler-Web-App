import { useState } from 'react';

import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import UpdateEvent from '../UpdateEvent';
import { DateProvider } from '../../contexts/date';
import './hero.css';

const Hero = () => {
  const [dayData, setDayData] = useState({ hasEvent: false, eventData: null });

  return (
    <DateProvider>
      <div className="hero">
        <Calendar stDayData={setDayData} />
        <div className="divisor"></div>
        <div className="options">
          {!dayData.hasEvent ? <Scheduler /> : null}
          {dayData.hasEvent ? <UpdateEvent data={dayData.eventData} /> : null}
        </div>
      </div>
    </DateProvider>
  );
};

export default Hero;
