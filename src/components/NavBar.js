import React, {useState} from "react"
import PropTypes from "prop-types"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {onAuthStateChanged, getAuth} from "firebase/auth"
import {signOut} from "firebase/auth"

const NavBar = () => {
  const logout = async () => {
    await signOut(auth)
  }
  
  const SignedInLinks = () => {
    return (
      <ul>
        <Link to = "/" className = "site_title"> RateMyTrip</Link>
        <CustomLink to = "/explore">Explore</CustomLink>
        <CustomLink to ="/Posting">Post</CustomLink>
        <a href = "/" onClick = {logout}>Sign Out</a>
      </ul>
    )
  }
  
  const SignedOutLinks = () => {
    return (
      <ul>
        <Link to = "/" className = "site_title"> RateMyTrip</Link>
        <CustomLink to = "/explore">Explore</CustomLink>
        <CustomLink to = "/signIn">Sign In</CustomLink>
        <CustomLink to = "/signUp">Sign Up</CustomLink>
      </ul>
    )
  }
  const [links, setLinks] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLinks(SignedInLinks());
    } else {
      setLinks(SignedOutLinks());
    }
  });

  return (
    <nav className = "nav">
      {links}
    </nav> 
  )
}




function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}
   
NavBar.defaultProps = {
  title: "Navigation Bar"
}

NavBar.propTypes = {
  title: PropTypes.string,
}

export default NavBar