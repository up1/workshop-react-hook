import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {

  const authContext = useContext(AuthContext);
  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          {authContext.isLoggedIn && <div>{authContext.user}</div>}
          {authContext.isLoggedIn ? <button onClick={() => authContext.logout()}>Logout</button> :
            <button onClick={() => authContext.login('demo_user')}>Login</button>}
        </nav>
      </div>
      <hr />
    </>
  )
}