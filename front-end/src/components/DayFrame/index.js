import './days.css';

const DayFrame = ({ day, events, onClick, onEventClick }) => {
  return (
    <div className="day-frame">
      <label htmlFor={day}>{day}</label>
      {events.map((e) => (
        <button
          className="event-button"
          type="button"
          key={e._id}
          onClick={() => onEventClick({hasEvent: true, eventData: e})}
        >
          {e.eventName}
        </button>
      ))}
      <button className="empty-button" type="button" id={day} onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default DayFrame;
