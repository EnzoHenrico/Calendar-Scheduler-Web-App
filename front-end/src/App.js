import './App.css';
import './components/style/body.components.css';
import Header from './components/header';
import Hero from './components/hero';
import Signin from './components/signin';

const App = () => {
  return (
    <div className="App">
      <Signin />
      {/* <Header />
      <Hero /> */}
    </div>
  );
};

export default App;
