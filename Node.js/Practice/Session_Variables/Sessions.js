// Session Varaibles:
// Session variables in Node.js are used to store user-specific data on the server during a user’s interaction with a web application,
// typically managed using middleware like express-session.
// By default: express-session stores the session in memory but in production they should be stored in a database (e.g: Redis)

// Store user data (e.g., login status, user ID) across multiple requests.
// Maintained on the server and linked to the client via a session ID.
// Commonly implemented using middleware such as express-session.


import express from 'express'
const app = express();
import session from 'express-session'
import cookieParser from 'cookie-parser';

const PORT = 4000;

app.use(cookieParser());

app.use(session({
    secret: "Amir",
    saveUninitialized: true,
    resave: true
}));

app.get('/', (req, res) => {
    if (req.session.view) {
        req.session.view++;
        res.send("You visited this page for " + req.session.view + " times");

    } else {
        req.session.view = 1;
        res.send("You have visited this page" + " for first time ! Welcome....");

    }
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`));