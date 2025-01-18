import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Service from './service';
import Project from './projects';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/services' element={<Service />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
