const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('DevOps Pipeline App is Running on EKS!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});