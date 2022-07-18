import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

const DateSelector = ({ currentDate, setCurrentDate }) => {
  return (
    <>
      <YearSelector
        value={currentDate.year}
        onChange={(year) => setCurrentDate((prev) => ({ ...prev, year }))}
      />
      <MonthSelector
        value={currentDate.month}
        onChange={(month) => setCurrentDate((prev) => ({ ...prev, month }))}
      />
    </>
  );
};

export default DateSelector;
