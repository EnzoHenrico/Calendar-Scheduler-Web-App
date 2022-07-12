import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  /* Create a state here to share user data
   * - If user is authenticated or not
   * - al user util data
   */

  return (
    <div className="home">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
