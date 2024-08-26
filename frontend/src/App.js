// src/App.js
import React, { useState, useEffect } from 'react';
import GuessForm from './GuessForm';
import './styles.css';

function App() {
  const [result, setResult] = useState('');
  const [gameId, setGameId] = useState(null); // Идентификатор игры (если нужен)

  // Функция для запуска новой игры
  const startNewGame = () => {
    fetch('http://localhost:3001/start_game', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setGameId(data.gameId || null); // Если сервер возвращает идентификатор игры
        setResult(''); // Очистка результата
      })
      .catch((error) => console.error('Error starting the game:', error));
  };

  // Запуск игры при загрузке компонента
  useEffect(() => {
    startNewGame();
  }, []);

  const handleGuess = async (guess) => {
    try {
      const response = await fetch('http://localhost:3001/guess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.message);

        // Если угадали число, начнем новую игру
        if (data.message.includes('You guessed the number')) {
          setTimeout(() => {
            startNewGame();
          }, 2000); // Задержка в 2 секунды перед перезапуском игры
        }
      } else {
        const errorData = await response.json();
        setResult(errorData.message);
      }
    } catch (error) {
      console.error('Error making a guess:', error);
      setResult('Error making a guess.');
    }
  };

  return (
    <div className="container">
      <h1>Guess the Number Game</h1>
      <GuessForm onGuess={handleGuess} />
      <p>{result}</p>
    </div>
  );
}

export default App;
