import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth ,createUserDocumentFromAuth} from '../../firebase'
import "./SignUp.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
// import AuthDetails from './AuthDetails'


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [username, setUsername] = useState("") 


    const signUp = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
      const {user, operationType} = data
      console.log(operationType, 'this is a OPERATION TYPE')
      console.log(user, 'this is a user object')
        createUserDocumentFromAuth(user, {username})
      }).catch((error) => {
        console.log(error)
      })
    } 

  return (
    <div className='signup-container'>
      <form onSubmit={signUp}>
        <h1>
            Create your Account
        </h1>
        <input id="username" className='auth-username' type='text'placeholder='enter username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input className="auth" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="auth" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='submit'>Sign Up </button>
      </form>
      <Link to={ROUTES.SIGN_IN} className="signup-link">Sign In</Link>
      
    </div>
  )
}

export default SignUp
