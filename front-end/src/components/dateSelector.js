import MonthSelector from './monthSelector';
import YearSelector from './yearSelector';

const DateSelector = ({ value, onChange }) => {
  const { year, month } = value;
  const { setYear, setMonth } = onChange;

  return (
    <div className="date-selectors">
      <YearSelector value={year} onChange={setYear} />
      <MonthSelector value={month} onChange={setMonth} />
    </div>
  );
};

export default DateSelector;
