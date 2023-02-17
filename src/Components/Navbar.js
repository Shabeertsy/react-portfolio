import './navbar.css'
import { Link } from 'react-router-dom'




function Navbar() {

  return (

    <div>
      {/* navbar */}
      <nav class="navbar navbar-expand-lg nav-bg font-family">
        <Link to='/' class="navbar-brand px-5 pt-4 links navbar-head text-light" href="#">PortFolio</Link>
        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="pt-3 collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav link-ul">
          <li class="nav-item">
            <Link to='/projects' className='links'>Projects</Link>
          </li>
            <li class="nav-item">
              <Link to='/myskills' className='links' >About me</Link>
            </li>
            <li class="nav-item">
              <Link to='/contacts' className='links' >Contact me</Link>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/shabeer-p-p-8b793623a/' className='links' >Download Cv</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
