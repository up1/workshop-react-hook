import { Navbar } from "../components/Navbar.jsx";
import { useState, useEffect, useContext } from "react";
import { useFetch } from "../hooks/useFetch.js";
import { AuthContext } from "../contexts/AuthContext.js";

const COVER_COUNT = 10
const MIN_DURATION = 1

export const HomePage = () => {
  const [count, setCount] = useState(0)
  const coverImages = useFetch(`https://shibe.online/api/shibes?count=${COVER_COUNT}`, [])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [transitionDuration, setTransitionDuration] = useState(1)

  const authContext = useContext(AuthContext)
  console.log('authContext from guess page: ', authContext)

  useEffect(() => {
    const duration = transitionDuration < MIN_DURATION ? MIN_DURATION : transitionDuration
    const interval = setInterval(() => {
      setCurrentIdx(prevCurrentIdx => (prevCurrentIdx + 1) % 10)
    }, duration * 1000)

    return () => {
      console.log('cleanup')
      clearInterval(interval)
    }
  }, [transitionDuration]);

  return (
    <>
      <Navbar />
      <h1>Welcome to my homepage</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>increase
      </button>

      <div>
        <img height={320} src={coverImages[currentIdx]}/>
      </div>
      <input value={transitionDuration} onChange={(e) => {
        setTransitionDuration(e.target.value)
      }}/>
    </>
  )
}