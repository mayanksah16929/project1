import React, { useState } from 'react';
import './App.css';

function App() {
  // State for storing dice roll values
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [message, setMessage] = useState('');

  // Function to simulate rolling the dice
  const rollDice = () => {
    // Random values between 1 and 6
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
    const diceRoll2 = Math.floor(Math.random() * 6) + 1;

    setDice1(diceRoll1);
    setDice2(diceRoll2);

    // Message based on dice roll
    if (diceRoll1 === diceRoll2) {
      setMessage('You rolled a double! 🎉');
    } else {
      setMessage('Try again! 😅');
    }
  };

  return (
    <div className="app">
      <h1>Dice Game</h1>
      <div className="dice-container">
        <div className="dice">{dice1}</div>
        <div className="dice">{dice2}</div>
      </div>
      <button className="roll-btn" onClick={rollDice}>
        Roll Dice
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
