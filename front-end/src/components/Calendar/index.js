import { useContext } from 'react';

import { DateContext } from '../../contexts/date';
import DayFrame from '../DayFrame';
import MonthSelector from '../MonthSelector';
import YearSelector from '../YearSelector';
import './calendar.css';

const Calendar = ({ setDayData }) => {
  const { days, date, setDate } = useContext(DateContext);

  return (
    <div className="calendar">
      <div className="date-selectors">
        <YearSelector
          value={date.year}
          onChange={(year) => setDate((prev) => ({ ...prev, year }))}
        />
        <MonthSelector
          value={date.month}
          onChange={(month) => setDate((prev) => ({ ...prev, month }))}
        />
      </div>
      <div className="days-board">
        {days.map((day) => (
          <DayFrame
            key={day.day}
            day={day.day}
            events={day.events}
            onClick={() => {
              setDate((prev) => ({ ...prev, day: day.day }));
              setDayData({ hasEvent: false, eventData: null });
            }}
            onEventClick={(e) => setDayData(e)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
