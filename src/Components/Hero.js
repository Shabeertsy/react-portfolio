import React from 'react'
import './hero.css'
import MovingComponent from 'react-moving-text'
import FontAwesome from 'react-fontawesome'




function Hero() {


  return (
    <div>
      <div className='landing-page'>
      </div>

      <div className='shadow'>


        {/* name text animation  */}

        <h1 className='hero-name responsive-text'>  <MovingComponent
          type="fadeInFromLeft"
          duration="1800ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="2"
          fillMode="none">
          SHABEER P P
        </MovingComponent></h1>



        {/* additional text typing animation */}
        
        <div className='right-animation'>
          <h3 className='moving-text'>  <MovingComponent type="typewriter" className='anime'
            dataText={[
              'React',
              'Python',
              'CSS',
              'JAVA SCRIPT'
            ]} /></h3>
        </div>


        {/* landing page description */}

        <div className='des-container'>
          <p className='description'>Build Amazing Responsive Website using react html and css  <br />Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum dolor sit amet consectetur. </p>



          {/* rotating plus icon using react module */}

          <FontAwesome

            className='responsive-button '
            name="plus"

            size="2x"
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />

        </div>


        {/* landing page hire me button */}

        <button className=' hero-button'>hire me</button>


      </div>
    </div>
  )
}

export default Hero
