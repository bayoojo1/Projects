const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

// app.use((req, res, next) => {
//     //console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

// app.use((req, res, next) => {
//     console.log('World!');
//     next();
// });

// Import the routes folder content
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

// Use the routes folder imported index.js in this app
app.use(mainRoutes);
// Use the routes folder imported cards.js in this app
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

// Middleware error function contains 4 parameters: err, req, res and next
// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.render('error');
// });

app.use(( err, req, res, next ) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
      res.status(err.status);
    else
      res.status(500);
    res.render('error');
  });

app.listen(3000, () => {
    console.log("The server is running on port 3000!");
});