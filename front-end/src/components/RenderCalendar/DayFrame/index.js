import { format } from 'date-fns';

const DayFrame = ({ dayNumber, events, onClick, onEventClick }) => {
  const buildEventLabel = (data, dayNumber) => {
    return `${dayNumber} ${data.eventName} 
    ${format(new Date(data.initDate), 'HH:mm')} - 
    ${format(new Date(data.endDate), 'HH:mm')}`;
  };

  return (
    <div className="day-frame">
      <div className="frames">
        {events.map((eventData) => (
          <button
            className="event-button"
            type="button"
            key={eventData._id}
            onClick={() => onEventClick(eventData)}
          >
            {buildEventLabel(eventData, dayNumber)}
          </button>
        ))}
        {/* Extra day button to add another event in the same day */}
        <button
          className="empty-button"
          type="button"
          id={dayNumber}
          onClick={onClick}
        >
          {dayNumber} +
        </button>
      </div>
    </div>
  );
};

export default DayFrame;
