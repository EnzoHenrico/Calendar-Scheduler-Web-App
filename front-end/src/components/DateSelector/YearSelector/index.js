
const YearSelector = ({ value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };
  return (
    <div className="year-selector">
      <div>{value}</div>
      <div className="buttons">
        <button
          type="button"
          className="arrow-button"
          id="up"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className="arrow-button"
          id="down"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default YearSelector;
