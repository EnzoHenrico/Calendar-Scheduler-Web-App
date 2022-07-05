import { useState } from 'react';
import DateSelector from './dateSelector';
import DayFrame from './dayFrame';

import './style/calendar.components.css';
import './style/days.components.css';
import get from '../api';

const getUserEvents = () => {
  const json = get('http://localhost:3001/api/v1/events');
  console.log(json)
}


const Calendar = () => {
  // Calendar date state setter 
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(7);
  
  // Render day frames base in month and year
  const numOfDays = new Date(year, month, 0).getDate();
  const array = Array.from({ length: numOfDays }, (v, i) => i + 1);

  return (
    <div className="calendar">
      <DateSelector value={{ year, month }} onChange={{ setYear, setMonth }} />
      <div className="days-board">
        {array.map((day) => (
          <DayFrame key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
