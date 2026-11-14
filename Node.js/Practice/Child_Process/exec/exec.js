// 2. exec():
// Executes a command in a shell and buffers the output.
// The exec() method runs a command in a shell and buffers the output,
// which is suitable for short-lived commands with small outputs.

// child_process
const child = spawn('cmd', ['/c', 'dir']);