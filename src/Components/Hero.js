import React from 'react'
import './hero.css'
import Myskills from '../Container/Myskills'
import Contact from '../Container/Contact'
import { BsArrowRightCircle } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Projects from '../Container/Projects'



function Hero() {
  return (
    <div>
      <div className="main-body">
        <div className="container hero-container left-slider">
          <div className="row">

            {/* left container */}
            <div className="col-lg-6">
              <div>
                <div className="container animated-container  ">
                  <div>
                    <button className="welcome-btn font-family">
                      Welcome to my PortFolio
                    </button>
                    <div className="name-container text-light pt-3">
                      <h1 className='font-family hero-name'>Hi! I'm Shabeer</h1>
                    </div>
                    <div className="animated-text mt-4">
                      <h4 className='text-light font-family'>Fullstack Web developer</h4>
                    </div>
                    <div className="dis-container">
                      <p className="font-family description text-light">
                       I'm a Python django + React developer 
                      </p>
                    </div>
                    <div className="hireme d-flex align-items-center ">
                      <Link to='/contacts' className='contact-btn font-family'> Let's Connect<i className='arrow-icon'><BsArrowRightCircle /></i> </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* right container */}
            <div className="col-lg-6 ">
              <div className="png-container">
                <img className='png-image' src={require('../assets/images/space.png')} alt="" />
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* use other Components on mobile view */}
      <div className="mobile-view">
      <Projects/>
        <Myskills/>
        <Contact/>

      </div>
    </div>
  )
}

export default Hero
