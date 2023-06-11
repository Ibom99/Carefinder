import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Button from '../../components/button'
import { useState } from 'react'
import { ROUTES } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
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
    <div>
      Dashboard
      <Button loading={loading} text='Sign Out' onClick={userSignOut}></Button>
    </div>
  )
}

export default Dashboard
