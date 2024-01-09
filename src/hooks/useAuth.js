import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export const useAuth = () => useContext(AuthContext)

export const useAuthContext = () => {
    const [user, setUser] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user_data'))
        
        if (userData) {
            setUser(userData.user)
            setIsLoggedIn(userData.isLoggedIn)
        }
    }, [])

    const login = (user) => {
        setUser(user)
        setIsLoggedIn(true)
        localStorage.setItem("user_data", JSON.stringify({ user: user, isLoggedIn: true }))
    }
    const logout = () => {
        setUser('')
        setIsLoggedIn(false)
        localStorage.removeItem("user_data")
    }

    return { user, isLoggedIn, login, logout }
}