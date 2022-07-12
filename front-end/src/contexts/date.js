import { useState, useEffect, createContext } from 'react';

import { get } from '../api';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const getUserEvents = async () => {
    try {
      const { year, month } = currentDate;
      const timestamp = new Date(year, month - 1, 1).getTime();
      const response = await get(`http://localhost:3001/api/v1/events/${timestamp}`);
      setDays(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, [currentDate.year, currentDate.month]);

  return (
    <DateContext.Provider value={{ days, currentDate, setCurrentDate }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
