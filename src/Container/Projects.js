import React from 'react'
import './container.css'

function Projects() {
  return (
    <div>
      <div className="project-main">
        <div className="project-inner">
          <div className="container font-family">
            <h3 className='text-light text-center pt-4 mb-3'>My Projects</h3>
            <div className="projects">
              <li className='cyan mt-5 left-slider'>django E-commerce application ,<a className='project-links' href="">goto</a></li>
              <li className='text-light mt-2 right-slider'>login,Register,Add to cart ,Remove from Cart,profile etc..</li>
              <li className='cyan mt-5 left-slider'>django College Fullstack app ,<a className='project-links' href="">goto</a></li>
              <li className='text-light right-slider'>login,Registe,approval,profile etc..</li>
              <li className='cyan mt-5 left-slider'>Netflix clone-react ,<a className='project-links' href="">goto</a></li>
              <li className='cyan mt-5 right-slider'>Portfolio-react ,<a className='project-links' href="">goto</a></li>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
