const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const prompt = require('prompt-sync')();



const app = express();
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});


io.on('connection', (socket) => {

  socket.on("set username", (name) => {
    socket.username = name;
  });

  socket.on('chat message', (msg) => {
    const timestamp = new Date().toLocaleTimeString();  // get current time
    io.emit('chat message', {
      user: socket.username || 'Anonymous',
      text: msg,
      time: timestamp,
    });
  });

});




server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});