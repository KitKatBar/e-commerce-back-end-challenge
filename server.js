// Import Express.js
const express = require('express');
// Import the routers
const routes = require('./routes');
// Import sequelize connection
const sequelize = require('./config/connection.js');

// Initialize our app variable by setting it to the value of express()
const app = express();
// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to send all the requests to our routes folder
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
