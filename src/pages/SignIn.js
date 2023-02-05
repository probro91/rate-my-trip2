import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import {auth} from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import '../components/form.css'

const SignIn = () => {
  
  const [email, setLoginEmail] = useState("")
  const [password, setLoginPassword] = useState("")

  const navigate = useNavigate()

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
    navigate("/")
    setLoginEmail('')
    setLoginPassword('')
  }
  
  return (
    <div className="center">
    <form  onSubmit={onSubmit}>
      <div className="txt_field">
        <input type="username" placeholder="username" value={email} onChange={(e) => setLoginEmail(e.target.value)}/>
      </div>
      <div className="txt_field">
        <input type="password" placeholder="password" value={password} onChange={(e) => setLoginPassword(e.target.value)}/>
      </div>
      <input type = "submit" value = "submit"/>
    </form>
    </div>
  )
}

export default SignIn