import './days.css';
import { format } from 'date-fns';

const DayFrame = ({ day, events, onClick, onEventClick }) => {
  return (
    <div className="day-frame">
      <label htmlFor={day}>{day}</label>
      <div className="frames">
        {events.map((e) => (
          <button
            className="event-button"
            type="button"
            key={e._id}
            onClick={() => onEventClick({ hasEvent: true, eventData: e })}
          >
            {e.eventName} {format(new Date(e.initDate), 'HH:mm')} -{' '}
            {format(new Date(e.endDate), 'HH:mm')}
          </button>
        ))}
        <button
          className="empty-button"
          type="button"
          id={day}
          onClick={onClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DayFrame;
