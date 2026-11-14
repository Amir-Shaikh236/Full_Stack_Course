// This example demonstrates session-based authentication.

// The user cannot access the profile until logge in.
// When the user logs in, session data is created and stored.
// When the user logs out, the session is destroyed.

import express from 'express'
const app = express()
import session from 'express-session'
import cookieParser from 'cookie-parser'
const PORT = 5000

app.use(session({
    secret: 'Amir',
    saveUninitialized: true,
    resave: true
}));

const user = {
    name: "Amir",
    RollNoe: 18,
    Address: 'Pune'
}

app.get('/login', (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send('You are Logged In')
})

app.get('/user', (req, res) => {
    const userData = req.session.user;
    if (!userData) return res.send('Please Login First')
    return res.send(userData)
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    return res.send('You are Logged Out')
})

app.listen(PORT, () => console.log(`Server is Running on Port: ${PORT}`))


// Best Practices
// Follow security and scalability best practices when managing session variables in Node.js applications.

// Use Secure Cookies: Enable secure: true in production with HTTPS.
// Session Expiration: Configure appropriate session timeout for security.
// Encrypt Session Data: Encrypt sensitive information before storing it.
// Use Persistent Store: Prefer Redis or MongoDB over in-memory storage for scalability.
// Avoid Sensitive Data: Do not store passwords keep only essential identifiers or tokens.
