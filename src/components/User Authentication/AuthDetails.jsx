import { useEffect, useState } from "react"
// import { useNavigate } from 'react-router-dom'
import React from 'react'
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const AuthDetails = () => {
    // const navigate = useNavigate()
    const [authUser, setAuthUser] = useState(null)

useEffect(() => {
const listen = onAuthStateChanged(auth, (user) => {
if (user) {
    setAuthUser(user);
    // // redirect to dashboard on successful login
    // navigate('/Dashboard')

} else {
    setAuthUser(null)
}
});

return () => {
listen()
}
}, [])

const userSignOut = () => {
    signOut(auth).then(() => {
        console.log("sign out successful")
        // navigate("/SignIn")  //Redirect to sign in page on sign out
    }).catch(error => console.log(error))
}

  return (
    <div className="details-conatiner">
      <p>{ authUser ? <> <p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out </button></> : <p>Signed Out</p>}</p>
    </div>
  )
}

export default AuthDetails
