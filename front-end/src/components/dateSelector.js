const DateSelector = (props) => {
  return (
    <div className="date-selectors">
      <input type="number"></input>
      <select className="month-selector">
        <option>{props.month}</option>
      </select>
    </div>
  );
};

export default DateSelector;
