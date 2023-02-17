import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Projects from './Container/Projects';
import Contact from './Container/Contact';
import Myskills from './Container/Myskills';



// main app function.

function App() {

  return (
    <div className="app">
      <div className="shadow">

      
        <Routes>
        <Navbar />
          <Route exact path='/' element={<Hero />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/myskills' element={<Myskills />} />
        </Routes>
      </div>










    </div>
  );
}

export default App;
