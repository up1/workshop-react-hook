// useAuth.js
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, setUser } from './authSlice'
import { useEffect } from 'react'

export const useAuth = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_data'))

        if (userData) {
            dispatch(setUser(userData))
        }
    }, [dispatch])

    const loginUser = (user) => {
        dispatch(login(user))
        localStorage.setItem("user_data", JSON.stringify({ user: user, isLoggedIn: true }))
    }

    const logoutUser = () => {
        dispatch(logout())
        localStorage.removeItem("user_data")
    }

    return { user, isLoggedIn, login: loginUser, logout: logoutUser }
}