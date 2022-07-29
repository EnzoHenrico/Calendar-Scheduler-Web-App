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

  const formattNumbers = (number) => {
    return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false});
  }

  return (
    <DateContext.Provider
      value={{ dayFramesArray, currentDate, setCurrentDate, setDayFrames, updateCalendar, setUpdate, formattNumbers }}
    >
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
