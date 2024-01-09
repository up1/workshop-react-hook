import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuth.js";

export const Navbar = () => {
  const { user, isLoggedIn, login, logout } = useAuthContext()
  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          {isLoggedIn && <div>{user}</div>}
          {isLoggedIn ? <button onClick={() => logout()}>Logout</button> :
            <button onClick={() => login('demo_user')}>Login</button>}
        </nav>
      </div>
      <hr />
    </>
  )
}