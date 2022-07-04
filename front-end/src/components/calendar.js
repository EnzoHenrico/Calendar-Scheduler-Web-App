import DateSelector from './dateSelector';
import DayFrame from './dayFrame';

const Calendar = () => {
  return (
    <div className="calendar">
      <DateSelector />
      <div className="days-board">
        <DayFrame />
      </div>
    </div>
  );
};

export default Calendar;
