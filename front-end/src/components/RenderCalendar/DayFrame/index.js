import styles from './Day.module.css';

const DayFrame = ({ dayNumber, events, onClick, onEventClick }) => {
  return (
    <div className={styles.frames}>
      <div className={styles.dayNumber}>{dayNumber}</div>
      <div className={styles.events}>
        {events.map((eventData) => (
          <button
            className={styles.filled}
            type="button"
            key={eventData._id}
            onClick={() => onEventClick(eventData)}
          >
            {eventData.eventName}
          </button>
        ))}
        <button
          className={styles.empty}
          type="button"
          id={dayNumber}
          onClick={onClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DayFrame;
