import DateSelector from './dateSelector';
import DayFrame from './dayFrame';
import './style/calendar.components.css';
import './style/days.components.css';

const Calendar = () => {
  return (
    <div className="calendar">
      <DateSelector />
      <div className="days-board">
        <DayFrame />
        <DayFrame />
      </div>
    </div>
  );
};

export default Calendar;
