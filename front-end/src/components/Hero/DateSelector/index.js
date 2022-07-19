import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

import styles from './Selectors.module.css';

const DateSelector = ({ currentDate, setCurrentDate }) => {
  return (
    <div className={styles.layout}>
      <YearSelector
        value={currentDate.year}
        onChange={(year) => setCurrentDate((prev) => ({ ...prev, year }))}
      />
      <MonthSelector
        value={currentDate.month}
        onChange={(month) => setCurrentDate((prev) => ({ ...prev, month }))}
      />
    </div>
  );
};

export default DateSelector;
