import { useParams } from "react-router-dom";
import Header from "./header";
import Hero from "./hero";

import get from "../api";

const Home = () => {
const userId = useParams();

const getUserEvents = async () => {
  
  try {
    const response = await get('http://localhost:3001/api/v1/events/', userId);
    console.log('HOME: ', response);
  } catch (error) {
    console.log(error);
  }
}

  return(<div className='home'>
    <input onClick={getUserEvents} type='submit'></input>
    <Header />
    <Hero />
  </div>)
}

export default Home;