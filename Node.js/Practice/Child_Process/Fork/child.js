// 4.fork():
// // Creates a Node.js child process with built-in message communication.
// // It establishes an IPC (Inter-Process Communication) channel between the parent and child processes,
// // allowing them to communicate via message passing.

// Listen for messages from the parent process
process.on('message', (message) => {
    console.log(`Message from parent: ${message}`);

    // Send a response back to the parent
    process.send('Hello from child');
});