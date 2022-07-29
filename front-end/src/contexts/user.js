import { useState, createContext, useEffect } from 'react';
import { get } from '../api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({username: '', id: ''});

  const getUser = async () => {
    try {
      const { data } = await get('http://localhost:3001/api/v2/user/');
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getUser();
  }, []);

  return(
    <UserContext.Provider
    value={{user}} >
      { children }
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };