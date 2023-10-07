import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import ProjectForm from './Components/ProjectForm';
import Projectmanager from './Components/Projectmanager';
import BrowzeProjects from './Components/BrowzeProjects';
import Hirefreelancers from './Components/Freelancers';
import { AppProvider } from './AppContext';


function App() {
  return (


    <div>
      <BrowserRouter>
      <AppProvider>
        <Navbar></Navbar>
        <Routes>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/addproject" element={<ProjectForm />} />
          <Route path="/browzeproject" element={<BrowzeProjects />} />
          <Route path="/projectmanager" element={<Projectmanager />} />
          <Route path="/profile" element={<Hirefreelancers />} />
          
          
        </Routes>
        </AppProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
