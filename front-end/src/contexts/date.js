import { useState, useEffect, createContext } from 'react';

import { get } from '../api';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [dayFramesArray, setDayFrames] = useState([]);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    dayNumber: new Date().getDate(),
  });

  const getUserEvents = async () => {
    try {
      const { year, month } = currentDate;
      const timestamp = new Date(year, month - 1, 1).getTime();
      const response = await get(
        `http://localhost:3001/api/v1/events/${timestamp}`,
      );
      setDayFrames(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, [currentDate.year, currentDate.month]);

  return (
    <DateContext.Provider
      value={{ dayFramesArray, currentDate, setCurrentDate }}
    >
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
