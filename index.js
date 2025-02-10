// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());




// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Math Operations API! Use /math/add, /math/subtract, /math/multiply, /math/divide, or /math/sqrt.');
});

// Addition route
app.post('/math/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers.' });
  }

  const result = num1 + num2;
  res.json({ operation: 'add', num1, num2, result });
});

// Subtraction route
app.post('/math/subtract', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers.' });
  }

  const result = num1 - num2;
  res.json({ operation: 'subtract', num1, num2, result });
});

// Multiplication route
app.post('/math/multiply', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers.' });
  }

  const result = num1 * num2;
  res.json({ operation: 'multiply', num1, num2, result });
});

// Division route
app.post('/math/divide', (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both num1 and num2 must be numbers.' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }

  const result = num1 / num2;
  res.json({ operation: 'divide', num1, num2, result });
});

// Square root route
app.post('/math/sqrt', (req, res) => {
  const { num } = req.body;

  if (typeof num !== 'number' || num < 0) {
    return res.status(400).json({ error: 'num must be a non-negative number.' });
  }

  const result = Math.sqrt(num);
  res.json({ operation: 'sqrt', num, result });
});

// Not found route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

