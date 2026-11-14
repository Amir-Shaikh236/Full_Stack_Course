// 1. spawn():
// // Starts a new Process and streams data between parent and child.
// // This method launches a new process with a specific command and arguments, providing streams for input/output.
// // it's ideal for handling large output or long-running processes.

import { spawn } from 'child_process'
const child = spawn('ls', ['-lh', '/usr']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

// spawn('ls', ['-lh', '/usr']): Executes the ls command with -lh and /usr as arguments.
// child.stdout.on('data', ...): Listens for data from the standard output.
// child.stderr.on('data', ...): Listens for data from the standard error.
// child.on('close', ...): Listens for the close event, indicating the process has finished.
