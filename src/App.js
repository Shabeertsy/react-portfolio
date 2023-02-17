import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Projects from './Container/Projects';
import Contact from './Container/Contact';
import Myskills from './Container/Myskills';
import Resume from './Container/Resume';



// main app function.

function App() {

  return (
    <div className="app">
      <div className="shadow">

      <Navbar />
      <Routes>
        <Route path='/contacts' element={<Contact />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/myskills' element={<Myskills />} />
        <Route path='/' element={<Hero />} />
        <Route path='/resume' element={<Resume />} />
        
      </Routes>
      </div>










    </div>
  );
}

export default App;
