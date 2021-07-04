/*
 * Primary API file
 */

// Dependencies
var server = require('./lib/server');


// Declare the app struct
var app = {};

// Init function
app.init = function() {
    // Start the server
    server.init();
};

// Execute init function
app.init();

// Export the app
module.exports = app;
