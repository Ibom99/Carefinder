import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithGoogle } from '../../firebase'
import AuthDetails from './AuthDetails'
import "./SignIn.css"
import { Link , useNavigate} from 'react-router-dom'
import { ROUTES, STORAGE_KEYS } from '../../utils/constants'
import Button from '../../components/button'


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
     
    const navigate = useNavigate()

    const signIn = (e) => {
    setLoading(true)
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password, history)
      .then((data) => {
        console.log(data)
        const {_tokenResponse: userToken, user} = data
        const {idToken} = userToken
        localStorage.setItem(STORAGE_KEYS.TOKEN, idToken)
        localStorage.setItem
        (STORAGE_KEYS.EMAIL, email)
        navigate(ROUTES.DASHBOARD)
      }).catch((error) => {
        console.log(error)
    setLoading(false)

      })

    }

    const signInWithGooglePopup = async () => {
      signInWithGoogle()
      .then((data) => {
        const { user } = data
        createUserDocumentFromAuth(user);
      }).catch((error) => {
        console.log(error)
      })
    };

  return (
    <div className='signin-container'>

      <div className='signin-content'>
      <div className='carefinder-image'>
<div className='signin-desc'>
<h1 className='carefinder-title'>Hospital search made easy.</h1>
<p className='carefinder-details'></p>
</div>
</div>
<div className='signin-form'>
<form onSubmit={signIn}>
  <h1>
      Log In to your Account
  </h1>
  <label for="email">Email</label>
  <input id="email" className="auth-email" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

  <label for="password">Password</label>
  <input id="password"className="auth-password" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
  <Button loading={loading} text='Login' type='submit' />
</form>
<Link to={ROUTES.SIGN_UP} className="signup-link">Sign Up</Link>
<AuthDetails />
<button onClick={signInWithGooglePopup}>Sign In with Google</button>

</div>

      </div>
      
    </div>
  )
}

export default SignIn
