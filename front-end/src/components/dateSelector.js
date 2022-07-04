import MonthSelector from './monthSelector';
import YearSelector from './yearSelector';

const DateSelector = () => {
  return (
    <div className="date-selectors">
      <YearSelector />
      <MonthSelector />
    </div>
  );
};

export default DateSelector;
