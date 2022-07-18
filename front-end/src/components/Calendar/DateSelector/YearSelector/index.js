import styles from '../Selector.module.css';

const YearSelector = ({ value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };
  return (
    <div className={styles.year}>
      <div>{value}</div>
      <div className="buttons">
        <button
          type="button"
          className={styles.arrows}
          id="up"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className={styles.arrows}
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
