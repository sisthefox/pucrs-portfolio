const express = require('express');
const app = express();
const PORT = 3003;
const cors = require('cors');
// Enable CORS for the notification service
app.use(cors());
// Endpoint to send notifications
app.get('/notify', (req, res) => {
  res.json({
    status: "Notification sent successfully!"
  });
});
// Start the server
app.listen(PORT, () => {
  console.log('notification-service is running on port 3003');
});