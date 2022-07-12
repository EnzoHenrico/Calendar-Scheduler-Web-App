import { useContext } from 'react';

import { DateContext } from '../../contexts/date';
import DayFrame from './DayFrame';

const RenderCalendar = ({ setDayData }) => {
  const { dayFramesArray, setCurrentDate } = useContext(DateContext);
  console.log(dayFramesArray);

  return (
    <>
      {
        // Render each DayFrame
        dayFramesArray.map((dayFrame) => (
          <DayFrame
            key={dayFrame.day}
            dayNumber={dayFrame.day}
            events={dayFrame.events}
            onClick={() => {
              setCurrentDate((prev) => ({ ...prev, day: dayFrame.day }));
              setDayData({ hasEvent: false, eventData: null });
            }}
            onEventClick={(data) => {
              setCurrentDate((prev) => ({ ...prev, day: dayFrame.day }));
              setDayData(data);
            }}
          />
        ))
      }
    </>
  );
};

export default RenderCalendar;
