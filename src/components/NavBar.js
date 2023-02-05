import PropTypes from "prop-types"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {onAuthStateChanged, getAuth} from "firebase/auth"

const NavBar = () => {
  const auth = getAuth()
  let user = auth.onAuthStateChanged;

  return (
    <nav className = "nav">
      <Link to = "/" className = "site_title"> RateMyTrip</Link>
      <ul>
       <CustomLink to = "/explore">Explore</CustomLink>
       {user && <CustomLink to ="/Posting">Post</CustomLink>}
       {!user && <CustomLink to = "/signIn">Sign In</CustomLink>}
       {!user &&<CustomLink to = "/signUp">Sign Up</CustomLink>}
       {user &&<CustomLink to = "/signOut">Sign Out</CustomLink>}
      </ul>
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