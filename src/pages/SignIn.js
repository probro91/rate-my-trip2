import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {auth} from '../firebase-config'
import '../components/form.css'

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
      alert(error.message);
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    
    if(!email) {
      alert("Please add a email")
      return
    }
    if(!password) {
      alert("Please add a password")
      return
    }
    
    login()
    
    setLoginEmail('')
    setLoginPassword('')
  }
  
  return (
    <div className="center">
    <form  onSubmit={onSubmit}>
      <div className="txt_field">
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setLoginEmail(e.target.value)}/>
      </div>
      <div className="txt_field">
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setLoginPassword(e.target.value)}/>
      </div>
      <input type = "submit" value = "submit"/>
    </form>
    </div>
  )
}

export default SignIn