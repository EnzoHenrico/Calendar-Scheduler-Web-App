import Options from './options';
import Calendar from './calendar';
import './style/hero.components.css';

const Hero = () =>{
  return (
  <div className='hero'>
      <Calendar />
      <div className="divisor"></div>
      <Options />
  </div>
  )
}

export default Hero;