// Creating custom middleware

const express = require('express');
const app = express(); 
const logger= require('./logger');
const morgan=require('morgan');
const config = require('config');
// Debug Module
const startupDebugger = require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');

app.use(express.json());

app.use(logger);
app.use(function(req,res,next){
    console.log('Authenticating...');
    next();
});

// Enviromennt with third party middleware
if(app.get('env')==='production'){
    app.use(morgan('tiny'));
    // console.log('Morgan enabled'); As per debug we can write
    startupDebugger('Morgan enabled');
}

//Db work
dbDebugger('Connected to a database..');


console.log(`Node Env: ${process.env.NODE_ENV}`);
console.log(`Node Environment: ${app.get('env')}`);


// Configuration
console.log("Application Name: " + config.get("name"));
console.log('Application Name: '+ config.get('mail.host'));










