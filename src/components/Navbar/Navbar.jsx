import React, { useState } from 'react'
import pic from './../../images/riya.png'
import  './Navbar.css'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'

export const Navbar = () => {
const[menu, setMenu] = useState(false) 
const navItems = [
  {
    id:1,
    text:"Home"
  },
  {
    id:2,
    text:"About"
  },
  {
    id:3,
    text:"Portfolio"
  },
  {
    id:4,
    text:"Contact"
  }
]
  
return (
  <>
    <div className=''>
      <div className='mains d-flex w-100 justify-content-between'>
          <div className='profile d-flex ms-4 mt-3 mb-1'>
              <div>
                  <img src={pic} alt='prof pic' width={70} height={70} className='rounded-5 ' />
              </div>
              <div className='ms-2'>
                  <h3>Riya</h3>
                  <h5>Software Developer</h5>
              </div>
          </div>
          <div className='nav d-flex list-unstyled'>
            {
              navItems.map(({text,id}) => (
                <li key={id}><Link to={text} smooth={true} duration={2}>{text}</Link></li>
              ))
            }
            <div onClick={() => setMenu(!menu)} className='btn'>{!menu?<IoMenuOutline size={25}/>:<IoMdClose size={25}/> }</div>
          </div>
      </div>
      {menu && (<div className='mobile list-unstyled h-100 w-100 justify-content-center text-center p-5'>
            {
              navItems.map(({text,id}) => (
                <li key={id}><Link to={text} smooth={true} duration={2}>{text}</Link></li>
              ))
            }
          </div>)}   
  </div>  
  </>
        
  )
}

