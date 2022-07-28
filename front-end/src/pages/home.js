import Header from '../components/Header';
import Hero from '../components/Hero';
import { UserProvider } from '../contexts/user';
import { DateProvider } from '../contexts/date';

const Home = () => {
  return (
    <DateProvider>
      <UserProvider>
        <Header />
      </UserProvider>
      <Hero />
    </DateProvider>
  );
};

export default Home;
