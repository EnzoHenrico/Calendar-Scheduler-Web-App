import Header from '../components/Header';
import Hero from '../components/Hero';
import { UserProvider } from '../contexts/user';

const Home = () => {
  return (
    <div className="home">
      <UserProvider>
        <Header />
      </UserProvider>
      <Hero />
    </div>
  );
};

export default Home;
