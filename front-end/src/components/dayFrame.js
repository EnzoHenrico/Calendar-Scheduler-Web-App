const DayFrame = ({ event, day, eventName }) => {
  return (
    <div className="day-frame">
      <button type="button" id="event" value={event}>
        +{eventName}
      </button>
      <label for="event">1{day}</label>
    </div>
  );
};

export default DayFrame;
