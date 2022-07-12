import { useState } from 'react';

import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import UpdateEvent from '../UpdateEvent';
import { DateProvider } from '../../contexts/date';
import './hero.css';

const Hero = () => {
  const [dayData, setDayData] = useState({ hasEvent: false, eventData: null });
  
  const dayHasAnEvent = () => {
    if(!dayData.hasEvent){
      return true; 
    }
    return false;
  }

  return (
    <DateProvider>
      <div className="hero">
        <Calendar setDayData={setDayData}/>
        <div className="divisor"></div>
        <div className="options">
          { dayHasAnEvent() ? <Scheduler/> : <UpdateEvent data={dayData.eventData}/> }
        </div>
      </div>
    </DateProvider>
  );
};

export default Hero;
