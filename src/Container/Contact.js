import React from 'react'
import './container.css'
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"


function Contact() {
  return (
    <div className='contact'>

      <div className='social'>
        <h1>Connect me on </h1>

        {/* social media links ans icons */}

        <div className="link">
          <h3><BsGithub/></h3>
          <a href="">Github</a>
          <h3 ><FaLinkedin /></h3>
          <a href="">Linkedin</a>

          <h3><BsInstagram /></h3>
          <a href="">instagram</a>

          <h3><FaWhatsapp /></h3>
          <a href="">whatsapp</a>

        </div>

      </div>



      {/* other contact details */}
      <div className="contact-details">

        <h1>Contact</h1>


        {/* contact form  */}
        <div className="form">
          <form className='form-list' action="">
            <input type="text" className='first-name' placeholder='First name' /><br />
            <input type="text" className='inp' placeholder='Last name' /> <br />
            <input type="phone" className='inp' placeholder='mobile or phone ' /><br />
            <input type="email" className='inp' placeholder='Enter your email' /><br />
            <input type="text" className='feedback' placeholder='write your feedback here . . ' />
            <input type="submit" placeholder='OK' name='OK' className='button' />
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
