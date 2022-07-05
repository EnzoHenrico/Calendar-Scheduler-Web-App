import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

import { get } from '../api';

const Home = () => {
  const [events, setEvents] = useState('');

  const getUserEvents = async () => {
    try {
      const response = await get('http://localhost:3001/api/v1/events/');
      setEvents(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents();
  }, []);

  return (
    <div className="home">
      <Header />
      <Hero events={events} />
    </div>
  );
};

export default Home;
