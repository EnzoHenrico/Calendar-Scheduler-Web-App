import { useState, useEffect, createContext } from 'react';

import { get } from '../api';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const getUserEvents = async () => {
    try {
      const { year, month } = date;
      const time = new Date(year, month - 1, 1).getTime();

      const response = await get(`http://localhost:3001/api/v1/events/${time}`);
      setDays(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, [date.year, date.month]);

  return (
    <DateContext.Provider value={{ days, date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateProvider };
