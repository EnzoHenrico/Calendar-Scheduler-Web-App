const DayFrame = ({ event, day }) => {
  return (
    <div className="day-frame">
      <label>1{day}</label>
      <button type="button" value={event}>
        +
      </button>
      ;
    </div>
  );
};

export default DayFrame;
