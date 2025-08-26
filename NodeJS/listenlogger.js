const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('logger',function(args){
    console.log('Listener Called')
});

logger.log('message');