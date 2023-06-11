import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthDetails from './AuthDetails'
import "./SignIn.css"
import { Link } from 'react-router-dom'


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
// const history = useHistory()

    const signIn = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password, history)
      .then((useCredential) => {
        console.log(useCredential)
        history.push('/Dashboard')
      }).catch((error) => {
        console.log(error)
      })

    }
    // const navigate = useNavigate()

    // function handleClick (signIn){
    //   signIn ? navigate("/Dashboard") : navigate("/SignIn")
    // }

  return (
    <div className='signin-container'>
      <form onSubmit={signIn}>
        <h1>
            Log In to your Account
        </h1>
        <input className="auth" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="auth" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type='submit'>Log In </button>
      </form>
      <Link to="/SignUp" className="signup-link">Sign Up</Link>
      <AuthDetails />
    </div>
  )
}

export default SignIn
