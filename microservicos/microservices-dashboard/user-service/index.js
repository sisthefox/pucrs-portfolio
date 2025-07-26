const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

// Enable CORS for the user service
app.use(cors());

// Endpoint to get user data
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Aragorn" },
    { id: 2, name: "Gimli" },
    { id: 3, name: "Legolas" },
    { id: 4, name: "Frodo" },
    { id: 5, name: "Gandalf" }
  ]);
});
// Start the server
app.listen(PORT, () => {
  console.log('user-service is running on port 3001');
});