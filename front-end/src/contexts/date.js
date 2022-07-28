import { useState, createContext } from 'react';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [updateCalendar, setUpdate] = useState(false);
  const [dayFramesArray, setDayFrames] = useState([]);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    dayNumber: new Date().getDate(),
  });

  return (
    <DateContext.Provider
      value={{ dayFramesArray, currentDate, setCurrentDate, setDayFrames, updateCalendar, setUpdate }}
    >
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
