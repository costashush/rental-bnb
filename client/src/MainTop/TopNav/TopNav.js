import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './TopNav.css';

const BasicExample = () => {

  const name = localStorage.getItem('name');

  return (

    <div className='topNav'>
      <ul>
        <li><Link to="/">Homes</Link></li>
        <li><Link to="/help">Help</Link></li>
        {name &&
          <li><Link to="/" onClick={() => localStorage.clear()}>Logout</Link></li>
        }
        {!name &&
          <div>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>}
        <li>
          <Link to="/">{name}</Link>
        </li>
      </ul>
    </div>
  )

}


export default BasicExample