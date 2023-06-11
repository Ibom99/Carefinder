import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import "./SignUp.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import AuthDetails from './AuthDetails'


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const signUp = (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
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
        <input className="auth" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="auth" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='submit'>Sign Up </button>
      </form>
      <Link to="/SignIn" className="signup-link">Sign In</Link>
      
    </div>
  )
}

export default SignUp
