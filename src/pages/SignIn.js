import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'

const SignIn = () => {
  
  const [email, setLoginEmail] = useState("")
  const [password, setLoginPassword] = useState("")

  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(email)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div classname = "signIn">
      <h3>Sign In</h3>
      <input placeholder = "Email" value={email} onChange={(e) => setLoginEmail(e.target.value)}/>
      <input placeholder = "Password" value={password} onChange={(e) => setLoginPassword(e.target.value)}/>
      <button onClick = {login}>Login</button>
    </div>
  )
}

export default SignIn