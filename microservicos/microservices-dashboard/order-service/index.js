const express = require('express');
const app = express();
const PORT = 3002;
const cors = require('cors');
// Enable CORS for the order service
app.use(cors());
// Endpoint to get order data
app.get('/orders', (req, res) => {
  res.json([
    { userId: 1, order: "Elven Leaves" },
    { userId: 2, order: "Dwarven Bread" },
    { userId: 3, order: "Elven Waybread" },
    { userId: 4, order: "Hobbit Ale" },
    { userId: 5, order: "Strong Ale Elixir" }
  ]);
});
// Start the server
app.listen(PORT, () => {
  console.log('order-service is running on port 3002');
});