const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

app.use(cors()); // Enable CORS for all requests

app.get('/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
    
});