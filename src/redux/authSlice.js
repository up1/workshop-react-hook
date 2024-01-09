// authSlice.js
import { createSlice } from '@reduxjs/toolkit'

// Try to load the auth state from localStorage
let savedState = localStorage.getItem('auth')
savedState = savedState ? JSON.parse(savedState) : { user: '', isLoggedIn: false }
const initialState = savedState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
      localStorage.setItem('auth', JSON.stringify({ user: action.payload, isLoggedIn: true }))
    },
    logout: (state) => {
      state.user = ''
      state.isLoggedIn = false
      localStorage.removeItem('auth')
    },
    setUser: (state, action) => {
      state.user = action.payload.user
      state.isLoggedIn = action.payload.isLoggedIn
      localStorage.setItem('auth', JSON.stringify({ user: action.payload.user, isLoggedIn: action.payload.isLoggedIn }))
    }
  }
})

export const { login, logout, setUser } = authSlice.actions

export default authSlice.reducer