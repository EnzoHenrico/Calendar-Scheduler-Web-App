const DayFrame = ({ event, day, eventName }) => {
  return (
    <div className="day-frame">
      <label htmlFor="event">{day}</label>
      <button type="button" id="event" value={event}>
        +{eventName}
      </button>
    </div>
  );
};

export default DayFrame;
