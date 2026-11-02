const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', "POST"],
    }
});

io.on('connection', (socket) => {
    socket.on('sendMsg', (data) => {
        io.emit('receiveMsg', data);
    })
});

global.io = io;