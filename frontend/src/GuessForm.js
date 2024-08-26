// src/GuessForm.js
import React, { useState } from 'react';

function GuessForm({ onGuess }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess !== '') {
      onGuess(parseInt(guess));
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button type="submit">Submit Guess</button>
    </form>
  );
}

export default GuessForm;
