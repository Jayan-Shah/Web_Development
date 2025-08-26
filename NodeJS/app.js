//Path 
const path= require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);
//OS module
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory:' + totalMemory);

// Template String
// ES6 which makes changes to JS
console.log(`Total Memory:${totalMemory}`);
console.log(`Free Memory:${freeMemory}`);

// File System Module Synchronnous Method
const fs=require('fs');
const files = fs.readdirSync('./');
console.log(files);

// File System Asynchronous Method

fs.readdir('.',function(err, files){
    if(err)
        console.log('Error',err);
    else
    console.log('Result',files);
});







