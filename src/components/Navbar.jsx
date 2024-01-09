import { NavLink } from "react-router-dom";
import {login, logout} from '../redux/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          {user && <div>{user}</div>}
          {isLoggedIn ? <button onClick={() => dispatch(logout())}>Logout</button> :
            <button onClick={() => dispatch(login('demo_user'))}>Login</button>}
        </nav>
      </div>
      <hr />
    </>
  )
}