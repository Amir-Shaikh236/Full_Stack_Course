const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on('sendMessage', (data) => {
        io.emit('receiveMessage', data);
    })
});

global.io = io;

app.get('/status', (req, res) => {
    res.send({ status: 'Server is running' });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// on Frontend we need to create socket.js file in which we will write the following code:
// import { io } from 'socket.io-client';
// const socket = io('http://localhost:3000');  this is the backend server address
// export default socket;

// Now we can use this socket instance in any component to send or receive messages in real-time.
// For example, in a React component, we can do the following:
// import React, { useEffect, useState } from 'react';
// import socket from './socket'; // path to the socket.js file
// const ChatComponent = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     useEffect(() => {
//         socket.on('receiveMessage', (message) => {
//             setMessages((prevMessages) => [...prevMessages, message]);
//         });
//         return () => {
//             socket.off('receiveMessage');
//         };
//     }, []);


