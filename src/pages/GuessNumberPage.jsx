import { useContext, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import {v4 as uuidv4} from 'uuid';
import { AuthContext } from "../contexts/AuthContext.js";

export const GuessNumberPage = () => {

  console.log('rendering GuessNumberPage')
  const authContext = useContext(AuthContext)
  console.log('authContext from guess page: ', authContext)

  const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [guessingNumber, setGuessingNumber] = useState('')
  const [hint, setHint] = useState('')
  const [guessedNumbers, setGuessedNumbers] = useState([])
  console.log('correct number: ', correctNumber)

  function updateGuessedNumber(e) {
    setGuessingNumber(e.target.value)
  }

  function guess() {
    let hint = ""
    if (guessingNumber == correctNumber) {
      hint = "Correct!! Congratulations!!"
    }
    if (guessingNumber < correctNumber) {
      hint = "Too less"
    }
    if (guessingNumber > correctNumber) {
      hint = "Too high"
    }

    setHint(hint)
    setGuessedNumbers([{ id: uuidv4(), number: guessingNumber, hint }, ...guessedNumbers])
  }

  const reset = () => {
    setCorrectNumber(Math.floor(Math.random() * 100) + 1)
    setGuessingNumber('')
    setHint('')
    setGuessedNumbers([])
  }

  return (
    <div>
      <Navbar />
      <h1>Guess the number (1-100)</h1>
      <input value={guessingNumber} type="number" onChange={updateGuessedNumber} /> <br />
      <button onClick={guess}>Guess</button>
      <button onClick={reset}>Reset</button>
      <h2>{hint}</h2>
      {guessedNumbers.map((item) => (<div key={item.id}>
        {item.number} is {item.hint}
      </div>))}
    </div>
  )
}