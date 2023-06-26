import React from 'react'
import "./NotFound.css"
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/constants'

const NotFound : React.FC = () => {
  return (
    <div className='notfound-container'>
      <div className='notfound-navigation'>
        {/* <NavBar /> */}
      </div>
      <div className='notfound-content'>
      <h1>Oops... you're lost! Page Not Found! </h1>
      <p>The page you're looking for is not available.<br></br> <Link className='notfound-home' to={ROUTES.LANDING}>Here's home!</Link></p>
      </div>
     
    </div>
  )
}

export default NotFound
