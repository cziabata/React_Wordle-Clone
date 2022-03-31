import React, { createContext, useState } from "react";
import './App.css';
import Board from "./components/Board.jsx";
import Keyboard from "./components/Keyboard";
import { boardDeafault } from "./Words";

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDeafault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  
  const onSelectLetter = (keyVal) => {
    if(currAttempt.letterPos > 4) return;
    const newBoard = {...board};
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1})
  }
  const onDelete = () => {
    if(currAttempt.letterPos === 0) return;
    const newBoard = {...board};
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos-1})
  }
  const onEnter = () => {
    if(currAttempt.letterPos < 5) return;
    setCurrAttempt({...currAttempt, attempt: currAttempt.attempt+1, letterPos: 0})
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <AppContext.Provider value={{ board, onSelectLetter, onDelete, onEnter }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </nav>
    </div>
  );
}

export default App;
