import { useState } from 'react'
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase-config'
import { useNavigate } from 'react-router-dom';

// firstname, lastname, username, email, password, confirm password
const SignUp = ({ onAdd }) => {

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(email)
    } catch (error) {
      alert(error.message);
    }


  }
  
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if(!userName) {
      alert("Please add a username")
      return
    }
    if(!email) {
      alert("Please add a email")
      return
    }
    if(!password) {
      alert("Please add a password")
      return
    }
    if(password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    
    register()
    
    setUserName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    navigate("/")
  }
  
  return (
    <div className="center">
      <h1>
        <strong> Sign Up</strong>
      </h1>
     <form onSubmit={onSubmit} >
      <div className='txt_field'>
        <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div className='txt_field'>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='txt_field'>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className='txt_field'>
        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>

      <input type = "submit" value = "SIGN UP"/>
    </form>
    </div>
  )
}

export default SignUp