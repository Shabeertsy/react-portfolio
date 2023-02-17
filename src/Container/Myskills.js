import React from 'react'
import './container.css'
import { AiOutlineHtml5 } from "react-icons/ai"
import { ImCss3 } from 'react-icons/im'
import { SiJavascript } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'
import { SiSqlite } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { BsArrowRightCircle } from "react-icons/bs"



function Myskills() {
  return (
    <div className='skills-main'>
      <div className="container  font-family">
        <div className="row skill-inner-main">
          <div className="col-lg-6 ">
            <h2 className='right-slider cyan'>About me</h2>
            <div className="about-dis">
            <h5 className='cyan mt-2 mb-4'>Profile</h5>
              <p  className='text-capitalize'>I,m a Python django + React Developer ,
                i have strong knowledge of python djago,HTML,CSS,Javascript and React
              </p>
              <h5 className='cyan mt-4'>Education</h5>
              <h6 className='mt-5'>Secondary School</h6>
              <li>Gvhss Thamarassery , 2013-2015</li>
              <h6 className='mt-5'>Bachelor of physics</h6>
              <li>Kmo arts and science colllege,koduvally , 2013-2015</li>
              <h6 className='mt-5'>Software Training</h6>
              <li>Maitexa technonlogies , kozhikode</li>

            </div>
          </div>
          <div className="col-lg-6">
            <h4 className='font-family text-center cyan'>Skills</h4>
            <div className="front-skill-row mt-5 ">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                  <h4>Frontend <i className='px-5 text-info'><BsArrowRightCircle /></i></h4>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className='col-lg-4 col'>
                      <h3 className='skill-icons px-3 down-slider'><AiOutlineHtml5 /></h3>
                      <p className='text-center font-family'>Html</p>
                    </div>
                    <div className='col-lg-4 col' >
                      <h3 className='skill-icons px-3 up-slider text-info'><ImCss3 /></h3>
                      <p className='text-center'>Css</p>
                    </div>
                    <div className='col-lg-4 col'>
                      <h3 className='skill-icons down-slider  px-3 text-warning'><SiJavascript /></h3>
                      <p className='text-center'>Javascript</p>
                    </div>
                    <div className='col-lg-4 col'>
                      <h3 className='skill-icons up-slider  px-4 text-bootstrap'><FaBootstrap /></h3>
                      <p className='text-center'>Bootstrap</p>
                    </div>
                    <div className='col-lg-4 col'>
                      <h3 className='skill-icons up-slider  px-4 text-info'><FaReact /></h3>
                      <p className='text-center'>React</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="back-skill-row">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                  <h4 >Backend <i className='px-5 text-danger' ><BsArrowRightCircle /></i></h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <div>
                    <h3 className='skill-icons px-3 up-slider text-success'><DiDjango /></h3>
                    <p className='text-center'>Django</p>

                  </div>
                  <div>
                    <h3 className='skill-icons px-3 down-slider text-warning'>< SiSqlite /></h3>
                    <p className='text-center'>Sql</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myskills
