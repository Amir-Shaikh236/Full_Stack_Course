import crypto from 'crypto';

const hash = crypto.createHash('sha256');
const result = hash.update('Hello, WOrld').digest('hex');
console.log(result);