import { NavLink } from "react-router-dom"
import '../styles/Nav.css'

const Nav = ({ user, handleLogout }) => {



  return user ? (
    <nav >
      <div className="navBar">
        <div className="mainLinks">
          <NavLink to="/" className="link"><i class="fa-solid fa-house"></i></NavLink>
          {/* <NavLink to="/about" className="link">About</NavLink> */}
          <NavLink to="/user" className="link"><i class="fa-solid fa-user"></i></NavLink>
          <NavLink to="/games" className="link"><i class="fa-solid fa-scale-balanced"></i></NavLink>
        </div>
        <div>
          <h1 className="name">
            SMART PICKS
          </h1>
        </div>
        <div className="logout">
          <NavLink to="/" onClick={handleLogout} className="logout link">
            <i class="fa-solid fa-user-xmark"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navBar">
      <h1 className="welcome">Welcome! Please <NavLink to="/register">Register</NavLink> or <NavLink to="/login">Login</NavLink></h1>
    </nav>
  )
}

export default Nav