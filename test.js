// index.js

const express = require('express');
const app = express();

// Example functions to test
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Routes
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = add(Number(a), Number(b));
    res.send(result.toString());
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const result = subtract(Number(a), Number(b));
    res.send(result.toString());
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    const result = multiply(Number(a), Number(b));
    res.send(result.toString());
});

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    try {
        const result = divide(Number(a), Number(b));
        res.send(result.toString());
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
