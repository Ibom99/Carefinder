import React, { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithGoogle } from '../../firebase'
// import AuthDetails from './AuthDetails'
import "./SignIn.css"
import { Link , useNavigate} from 'react-router-dom'
import { ROUTES, STORAGE_KEYS } from '../../utils/constants'
import Button from '../../components/button'
import { FcGoogle } from "react-icons/fc";
import { MdOutlineWavingHand } from "react-icons/md";

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
  <div className='signin-context'>
  <h1 className='carefinder-title'>Hospital <span className='search'>search</span> made easy.</h1>
<p className='carefinder-details'>Discover the nearest hospital to you.<br></br>Share your experience and explore a catalog of reviews.</p>
  </div>

</div>
</div>
<div className='signin-form'>
<form onSubmit={signIn}>
  <h1 className='login-title'>
      Hey, hello <i className='waving-icon'><MdOutlineWavingHand /> </i> 
  </h1>
  <p className='login-description'>Enter the information you entered while registering.</p>
  <label htmlFor="email">Email</label>
  <input id="email" className="auth-email" type='email'placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />

  <label htmlFor="password">Password</label>
  <input id="password"className="auth-password" type='password'placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />

  <Button loading={loading} className="login-btn" text='Login' type='submit' />
</form>
<p className='or-text'>OR</p>

<button className='google-signin' onClick={signInWithGooglePopup}><FcGoogle /> <p className='google-text'>Sign In with Google</p></button>
{/* <AuthDetails /> */}
<p className='signup-text'>Don't have an account? <Link to={ROUTES.SIGN_UP} className="signup-page">Sign Up</Link></p>

</div>

      </div>
      
    </div>
  )
}

export default SignIn
