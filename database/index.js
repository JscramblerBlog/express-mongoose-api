const mongoose = require('mongoose'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('../server/env')[env];

mongoose.Promise = require('bluebird');
mongoose.connect(envConfig.db, { useNewUrlParser: true, useUnifiedTopology: true });

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {  
  console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});