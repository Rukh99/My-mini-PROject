import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Login from './Components/Login';


function App() {
  return (

    
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>

  <Route path="/signup" element={<Signup />}/>
  <Route path="/login" element={<Login />}/>



    </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
