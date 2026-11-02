import fs from 'fs';
import http from 'http'
// import path from 'path';
// import { fileURLToPath } from 'url';

// const file_name = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(file_name);

const server = http.createServer((req, res) => {
    // const filepath = path.join(__dirname, 'test.js');
    fs.readFile('test1.js', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})