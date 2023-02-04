import { useState } from 'react'

// firstname, lastname, username, email, password, confirm password
const SignUp = ({ onAdd }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if(!firstName) {
      alert("Please add a first name")
      return
    }
    if(!lastName) {
      alert("Please add a last name")
      return
    }
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
    if(password ==! confirmPassword) {
      alert("Passwords do not match")
      return
    }

    onAdd({ firstName, lastName, userName, email, password })

    setFirstName("")
    setLastName("")
    setUserName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
        <label>confirmPassword</label>
        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>

      <input type="submit" value="Create Account"/>
    </form>
  )
}

export default SignUp