import React, { createContext, useState } from "react";
import './App.css';
import Board from "./components/Board.jsx";
import Keyboard from "./components/Keyboard";
import { boardDeafault } from "./Words";

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDeafault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
  
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt}}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </nav>
    </div>
  );
}

export default App;
