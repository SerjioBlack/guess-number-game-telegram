// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

let secretNumber = null;

app.use(cors());
app.use(express.json());

app.post('/start_game', (req, res) => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ message: 'Game started! Try to guess the number.' });
});

app.post('/guess', (req, res) => {
  const { guess } = req.body;

  if (secretNumber === null) {
    return res.status(400).json({ message: 'Game has not started yet.' });
  }

  if (guess < secretNumber) {
    res.json({ message: 'The secret number is higher.' });
  } else if (guess > secretNumber) {
    res.json({ message: 'The secret number is lower.' });
  } else {
    res.json({ message: 'Congratulations! You guessed the number!' });
    secretNumber = null; // Скинути гру
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
