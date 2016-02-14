/* 

Reusable database module for Mongoose interface with MongoDB

*/ 

'use strict';

const mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
	console.log("We're in production!");
	dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

// If running on Windows, add SIGINT listener with readline herex
var db = mongoose.connection;

db.on('connected', () => {
	console.log(`Mongoose connected to ${dbURI}`);
});

db.on('error', (err) => {
	console.log(`Mongoose connection error: ${err}`);
});

db.on('disconnected', () => {
	console.log('Mongoose disconnected');
});

// Close the database connection before app shuts down
var gracefulShutdown = (msg, callback) => {
	db.close(() => {
		console.log(`Mongoose disconnected through ${msg}`);
		callback();
	});
};

// Listen for nodemon restarts
process.once('SIGUSR2', () => {
	gracefulShutdown('nodemon restart', () => {
		process.kill(process.pid, 'SIGUSR2');
	});
});

// Listen for app termination
process.on('SIGINT', () => {
	gracefulShutdown('app termination', () => {
		process.exit(0);
	});
});

// Listen for Heroku app termination
process.on('SIGTERM', () => {
	gracefulShutdown('Heroku app termination', () => {
		process.exit(0);
	});
});

require('./locations');
