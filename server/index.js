const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let counter = 0;

wss.on('connection', (ws) => {

  const interval = setInterval(() => {
    counter++;
    const data = {
      counter,
      randomString: generateRandomString(10),
    };
    ws.send(JSON.stringify(data));
  }, 2000);


  ws.on('close', () => {
    clearInterval(interval);
  });
});

// REST API endpoint
app.get('/api/data', (req, res) => {
  const data = {
    counter,
    randomString: generateRandomString(10),
  };
  res.json(data);
});


function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
