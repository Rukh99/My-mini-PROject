import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AppContext = createContext;


export const AppProvider = ({children}) =>{
 {
const navigate = useNavigate();
const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
)

const [loggedIn, setLoggedIn] = useState(user!=null);


const logOut= ()=>
 {
    setLoggedIn(false);
    sessionStorage.removeItem('user')
    navigate('/');
 }
 }

  return (
   <AppContext.Provider value ={{loggedIn,setLoggedIn,logOut}}>{children}</AppContext.Provider>
  )
  }
  const useAppContext=() => useContext(AppContext);

export default useAppContext;