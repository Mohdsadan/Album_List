import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div className='navbar'>
        <span className='brand-first-half'><h2>ALBUMS LIST APP</h2></span>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
