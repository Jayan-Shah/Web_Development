
// Extended Event Emitter in order to come up with strong solution of not creating multiple instances of class as emitter.

const EventEmitter = require('events');

// var url='http://mylogger.io/log';

class Logger extends EventEmitter {
    // In class function keyword is not needed..Within class function is knows as methods
    log(message){
        console.log(message);
        this.emit("logger");
    }
    
}


// Now this function is private. If i want to make it available for another files globally I have to export it.
module.exports=Logger;
// modiule.exports.endpoint=url; 

