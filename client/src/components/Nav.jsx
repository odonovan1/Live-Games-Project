import { NavLink } from "react-router-dom"
import '../styles/Nav.css'

const Nav = ({ user, handleLogout }) => {



  return user ? (
    <nav >
      <div className="navBar">
        <div className="mainLinks">
          <NavLink to="/" className="link"><i className="fa-solid fa-house"></i></NavLink>
          {/* <NavLink to="/about" className="link">About</NavLink> */}
          <NavLink to="/user" className="link"><i className="fa-solid fa-user"></i></NavLink>
          <NavLink to="/games" className="link"><i className="fa-solid fa-scale-balanced"></i></NavLink>
          <NavLink to="/users" className="link"><i class="fa-solid fa-users"></i></NavLink>
          <NavLink to="/password" className="link"><i class="fa-solid fa-pen-to-square"></i></NavLink>
        </div>
        <div>
          <h1 className="name">
            S M A R T         P I C K S
          </h1>
        </div>
        <div className="logout">
          <NavLink to="/" onClick={handleLogout} className="logoutButton">
            <i className="fa-solid fa-user-xmark"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navBar">
      <h1 className="welcome">Welcome! Please <NavLink to="/register" className="clickable">Register</NavLink> or <NavLink to="/login" className="clickable">Login</NavLink></h1>
    </nav>
  )
}

export default Nav