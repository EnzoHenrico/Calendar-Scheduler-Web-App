import { useState } from 'react';
import Scheduler from '../Scheduler';
import Calendar from '../Calendar';
import './hero.css';

const Hero = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');

  return (
    <div className="hero">
      <Calendar setDate={setDate} />
      <div className="divisor"></div>
      <Scheduler date={date} />
    </div>
  );
};

export default Hero;
