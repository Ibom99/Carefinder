import React from 'react'
import "./DashNav.css"
import { useState } from 'react'
import {  signOut }
 from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import Button from './button'
import { ROUTES } from '../utils/constants'
import { Link } from 'react-router-dom'
// import { ImExit } from "react-icons/im";


const DashNav = () => {
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const userSignOut = () => {
    setLoading(true)
    signOut(auth).then(() => {
        localStorage.clear()
        navigate(ROUTES.LANDING)  //Redirect to sign in page on sign out
    }).catch(error => console.log(error))
    setLoading(false)
}

  return (
    <div className='dash-nav-container'>
      <div className='dash-nav-content'>
        <h1 className='dash-title'>Carefinder</h1>
<ul className='dash-nav'>
    {/* <li>
        <Link to={ROUTES.LANDING}>Home</Link>

    </li> */}
     <li>Drop a review</li>
     <li>Add New Hospital</li>

    <li>User Feedback</li>
</ul>
<div className='signout-btn'>

<Button loading={loading} className="btn-signout" text='Log Out' onClick={userSignOut}></Button>
</div>

      
      </div>
      </div>
  )
}

export default DashNav
