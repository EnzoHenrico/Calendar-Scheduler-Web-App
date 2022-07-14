import { useContext } from 'react';

import { DateContext } from '../../contexts/date';
import DayFrame from './DayFrame';

const RenderCalendar = ({ setDayData }) => {
  const { dayFramesArray, setCurrentDate } = useContext(DateContext);
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
              setDayData({ type: 'scheduler' });
            }}
            onEventClick={(event) => {
              setCurrentDate((prev) => ({ ...prev, day: dayFrame.day }));
              setDayData({ type: 'event', event });
            }}
          />
        ))
      }
    </>
  );
};

export default RenderCalendar;
