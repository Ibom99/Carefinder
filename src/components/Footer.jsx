import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/constants'

const Footer = () => {
  return (
    <div className='footer-container'>
        <h1 className='footer-title'>Carefinder</h1>
        <div className='footer-content'>
        <div className='footer-contact'>
<h1>Contact Us</h1>
<p><a href="mailto:ibom.esther@gmail.com">ibom.esther@gmail.com</a></p>
<p><a href="tel:+2348140390964">+234 8140390964</a></p>
      </div>
      <div className='footer-navigation'>
<h1>Company</h1>
<p><Link className='footer-link' to={ROUTES.REVIEWS}>Hospital Reviews</Link></p>
<p><Link className='footer-link' to={ROUTES.BMI}> BMI Calculator</Link></p>
<p><Link className='footer-link' to={ROUTES.ABOUT}> About Us</Link></p>
<p><Link className='footer-link' to={ROUTES.FAQ}> FAQs</Link></p>
<p><Link className='footer-link' to={ROUTES.SIGN_IN}> Sign in</Link></p>
<p><Link className='footer-link' to={ROUTES.SIGN_UP}> Sign up</Link></p>
</div>

<div className='footer-features'>
<h1>Features</h1>
<p>Content Management</p>
<p>User Support</p>
<p>Review Analysis</p>
</div>

<div className='footer-support'>
    <h2 className='support-title'>Need assitance or have a complaint?</h2>
    <p className='support-desc'><em>Drop your feedback or complaint down below!</em></p>
<label className='support-label'>Email:</label>
<input type='email' placeholder='Enter email...' className='support-input' />
<label className='support-label'>Feedback/Report:</label>
<textarea rows="5" type='text' placeholder='Enter remark...' className='support-input' />
<button className='support-btn'>Send</button>
</div>
        </div>
      
     
    </div>
  )
}

export default Footer
