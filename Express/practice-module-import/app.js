// Import Express and set up the app
const express = require('express');
const app = express();

// Import route
const routes = require('./routes');

// Import 404 and global error handlers
const errorHandlers = require('./errorHandlers');

// Pass route handler to the app
app.use(routes);

app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);


// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})