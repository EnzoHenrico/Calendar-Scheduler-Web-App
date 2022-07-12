import { useContext } from 'react';

import { DateContext } from '../../contexts/date';
import DateSelector from '../DateSelector';
import RenderCalendar from '../RenderCalendar';
import './calendar.css';

const Calendar = ({ setDayData }) => {
  const { currentDate, setCurrentDate } = useContext(DateContext);

  return (
    <div className="calendar">
      <div className="date-selectors">
        <DateSelector
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </div>
      <div className="days-board">
        <RenderCalendar setDayData={setDayData} />
      </div>
    </div>
  );
};

export default Calendar;
