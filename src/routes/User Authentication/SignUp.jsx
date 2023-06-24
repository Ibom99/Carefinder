import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth ,createUserDocumentFromAuth} from '../../firebase'
import "./SignUp.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import Button from '../../components/button'
import { Helmet } from 'react-helmet-async'
// import AuthDetails from './AuthDetails'


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [username, setUsername] = useState("") 
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signUp = (e) => {
      setLoading(true)
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
      const {user, operationType} = data
      console.log(operationType, 'this is a OPERATION TYPE')
      console.log(user, 'this is a user object')
        createUserDocumentFromAuth(user, {username})
        navigate(ROUTES.SIGN_IN)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
    } 

  return (
    <div className='signup-container'>
<Helmet>
        <title>Carefinder Sign Up Page</title>
        <meta name='description' content='Welcome to Carefinder sign up page' />
        <link rel='canonical' href={ROUTES.SIGN_UP} />
      </Helmet>
      <div className='signup-content'>
      <div className='carefinder-image'>
<div className='signup-desc'>
  <div className='signup-context'>
  <h1 className='carefinder-title'>Hospital <span className='search'>search</span> made easy.</h1>
<p className='carefinder-details'>Discover the nearest hospital to you.<br></br>Share your experience and explore a catalog of reviews.</p>
  </div>

</div>
</div>
<div className='signup-form'>


      <form onSubmit={signUp}>
      <h1 className='carefinder-logo' ><Link className='carefinder-link' to={ROUTES.LANDING}>Carefinder</Link></h1>
        <h1 className='signup-title'>
            Create an account
        </h1>

        <label htmlFor='username'>Username</label>
        <input id="username" className='auth-username' type='text'placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}></input>

        <label htmlFor='email'>Email</label>
        <input className="auth-email" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <label htmlFor='password'>Password</label>

        <input className="auth-password" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button loading={loading} className="signup-btn" text='Sign Up' type='submit' />
      </form>
      <p className='signin-text'>Already have an account? <Link to={ROUTES.SIGN_IN} className="signin-page">Sign In</Link></p>
      
      </div>
      </div>
      
      
    </div>
  )
}

export default SignUp
