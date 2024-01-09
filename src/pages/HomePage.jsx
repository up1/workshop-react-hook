import { Navbar } from "../components/Navbar.jsx";
import { useState } from "react";

export const HomePage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <h1>Welcome to my homepage</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>increase
      </button>


      {/*  TODO: Cover Images */}
      {/*  TODO: Jokes */}
    </>
  )
}