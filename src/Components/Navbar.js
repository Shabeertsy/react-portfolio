import React,{useState} from 'react'
import './navbar.css'
import {Routes,Route,Link} from 'react-router-dom'




function Navbar() {

const [responsiveH,setResponsiveH]=useState(false)


// onclick handler for navbar

function navbarHandler(){
setResponsiveH(!responsiveH)
}

let classes='';

if(responsiveH){
  classes='responsive'
}

 
console.log('boolean : ',responsiveH);


  return (    
  <div>
 
 <div className={classes+" "+'topnav'} id="myTopnav">
 
  <Link to='/' className="active">Home</Link>
  <Link to='/about' className='link-about'>About</Link>
  <Link to='/myskills' >My Skills</Link>
  <Link to='/contacts' >Contacts</Link>
  <Link  onClick={()=>navbarHandler()} className="icon"><i className='fa fa-bars'></i></Link>
 
 

  
  
  
  

</div>

    </div>
  )
}

export default Navbar
