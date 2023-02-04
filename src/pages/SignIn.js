import React from 'react'

const SignIn = () => {
  
  const [email, setLoginEmail] = useState("")
  const [password, setLoginPassword] = useState("")

  const login = async() => {

  }
  return (
    <div classname = "signIn">
      <h3>Sign In</h3>
      <input placeholder = "Email" value={email} onChange={(e) => setLoginEmail(e.target.value)}/>
      <input placeholder = "Password" value={password} onChange={(e) => setUserName(e.target.value)}/>
      <button>Login</button>
    </div>
  )
}

export default SignIn