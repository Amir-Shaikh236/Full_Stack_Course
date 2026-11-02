import EventEmitter from 'events';

const MyEmitter = new EventEmitter();

MyEmitter.on('Message', (data) => {
    console.log('Message received: ' + data);
})
MyEmitter.emit('Message', 'Hello, this is an event-driven message!');