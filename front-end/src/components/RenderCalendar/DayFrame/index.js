import './days.css';
import { format } from 'date-fns';

const DayFrame = ({ dayNumber, events, onClick, onEventClick }) => {
  const buildEventLabel = (data) => {
    return `${data.eventName} 
    ${format(new Date(data.initDate), 'HH:mm')} - 
    ${format(new Date(data.endDate), 'HH:mm')}`;
  };

  return (
    <div className="day-frame">
      <label htmlFor={dayNumber}>{dayNumber}</label>
      <div className="frames">
        {events.map((data) => (
          <button
            className="event-button"
            type="button"
            key={data._id}
            onClick={() => onEventClick({ hasEvent: true, eventData: data })}
          >
            {buildEventLabel(data)}
          </button>
        ))}
        {/* Extra day button to add another event in the same day */}
        <button
          className="empty-button"
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
