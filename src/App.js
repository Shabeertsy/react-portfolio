import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { Route, Link, Routes } from 'react-router-dom'
import About from './Container/About';
import Contact from './Container/Contact';
import Myskills from './Container/Myskills';



// main app function.

function App() {
  return (
    <div className="App">

<Navbar/>
<Routes>
<Route path='/contacts' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/myskills' element={<Myskills/>}/>
<Route path='/' element={<Hero/>}/>
</Routes>




          
  
      



    </div>
  );
}

export default App;
