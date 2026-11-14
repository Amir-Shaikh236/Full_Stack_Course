// 3. execFile():
// Runs an executable file directly without using shell.
// The execFile() method runs an executable file directly without spawning a shell,
// making it more efficient than exec() for running binaries and scripts directly.

import { execFile } from 'child_process'

execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error(`execFile error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
});

// execFile('node', ['--version'], ...): Executes the Node.js binary with the --version flag.
// The callback receives error, stdout, and stderr as parameters.
// Logs the standard output and error to the console.