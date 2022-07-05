import { useEffect, useState } from 'react';
import DayFrame from '../DayFrame';
import MonthSelector from '../MonthSelector';
import YearSelector from '../YearSelector';

import './calendar.css';
// import { get } from '../../api';

const Calendar = ({ setDate }) => {
  // Calendar date state setter
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(7);

  // Render day frames base in month and year
  const numOfDays = new Date(year, month, 0).getDate();
  const array = Array.from({ length: numOfDays }, (v, i) => i + 1);

  useEffect(() => {
    setDate({ year, month });
  }, [year, month]);

  return (
    <div className="calendar">
      <div className="date-selectors">
        <YearSelector value={year} onChange={setYear} />
        <MonthSelector value={month} onChange={setMonth} />
      </div>
      <div className="days-board">
        {array.map((day) => (
          <DayFrame key={day} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
