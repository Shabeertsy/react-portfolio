import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './container.css'

import { BsInstagram } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { ImCross } from 'react-icons/im'




function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState(true)
  const [alert, setAlert] = useState('')
  const [close, setClose] = useState(false)


  let checkHandler = () => {
    if (name == "" || email == "" || content == "") {
      setStatus(false)
      console.log('if', status);
      setAlert('')
    } else {
      setStatus(true)
      setAlert('')


    }
  }


  const closeHandler = () => {
    console.log(name, email, content);
    setClose(false)
  }







  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('if', status);


    if (status == true) {
      setClose(false)
      emailjs.sendForm('service_bhheqta', 'template_btnnlqs', form.current, 'GMTNZm9-szNqTQCbb')
        .then((result) => {
          console.log(result.text);
          setAlert('Mail send successfully!')
          setClose(true)
        }, (error) => {
          console.log(error.text);
        })
    } else {
      setClose(true)
      setAlert('fields cannot be empty!')
    }
  };


  return (
    <div>
      <div className='contact'>
        <div className="row contact-inner-main">
          <h2 className='font-family fading-text'>Connect me </h2>


          {/* left side */}
          <div className="col-lg-6 left-slider">
            <div className="contact-data mt-5 container">
              <div className="datas  text-center">
                <h5 className='font-family text-info'>info</h5>
                <div className="myname mt-5">
                  <h3 className='text-light font-family'>Shabeer</h3>
                </div>
                <div className="personal text-light mt-5 font-family">
                  <p>Email</p>
                  <p>shabeerppsty@gmail.com</p>
                </div> <div className="personal text-light mt-4 font-family">
                  <p>Phone</p>
                  <p>9645912038</p>
                </div>
              </div>
            </div>



            <div className='social font-family'>
              <p className='text-center text-warning' style={{ 'fontSize': '0.8rem' }}>Connect with</p>
              {/* social media links ans icons */}
              <div className="link">
                <div>
                  
                  <a href='https://github.com/Shabeertsy' className='social-icons'>< BsGithub /></a><br />
                  <a href="https://github.com/Shabeertsy">Github</a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/shabeer-p-p-8b793623a/' className='social-icons' ><FaLinkedin /></a><br />
                  <a href="https://www.linkedin.com/in/shabeer-p-p-8b793623a/">Linkedin</a>
                </div>
                <div>
                  <a href='https://www.instagram.com/___shabeer__/' className='social-icons'><BsInstagram /></a><br />
                  <a href="https://www.instagram.com/___shabeer__/">instagram</a>
                </div>
                <div>
                  <a href='' className='social-icons'><FaWhatsapp /></a><br />
                  <a href="">whatsapp</a>
                </div>
              </div>
            </div>
          </div>



          {/* right side */}
          <div className="col-lg-6 right-slider">
            {close ? <div className={`alert right-slider ${status ? 'alert' : 'alert-two'}`}>
              <p className='alert-msg'>{alert}</p>
              <h5 onClick={closeHandler}><ImCross /></h5>
            </div> : ''}

            {/* other contact details */}
            <div className="contact-details">
              <h3 className='text-light feedback-txt font-family mb-5'>Send Mail</h3>

              {/* contact form  */}
              <div className="form font-family ">
                <form ref={form} onSubmit={sendEmail}>

                  <div className="form-outline mb-4">
                    <input placeholder='Name' value={name} name='user_name' onChange={(e) => setName(e.target.value)} type="text" id="form4Example1" className="inpu" />
                  </div>

                  <div className="form-outline mb-4">
                    <input placeholder='email' value={email} name='user_email' onChange={(e) => setEmail(e.target.value)} type="email" id="form4Example2" className="inpu" />
                  </div>

                  <div className="form-outline mb-4">
                    <textarea className="inpu" value={content} name='message' onChange={(e) => setContent(e.target.value)} id="form4Example3" rows="4"></textarea>
                  </div>

                  <button onClick={checkHandler} type="submit" className="send-btn mb-4 font-family">Send</button>
                </form>

              </div>
            </div>
          </div>
          <div className="credit mt-5 credit-text text-light text-center font-family">
            credits.
            <p className="credit-text text-light mt-2">Images by <a href="https://www.freepik.com/free-vector/desktop-smartphone-app-development_10276838.htm#query=front%20end&position=2&from_view=keyword&track=ais">Freepik</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
