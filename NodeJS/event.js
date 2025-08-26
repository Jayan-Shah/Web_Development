
// Events Modules
const EventEmitter =require('events');
//EventEmitter is a class
const emitter = new EventEmitter();
// Produce Something or making a noise is emit

//Register a listener
emitter.on("messageLogged", (arg)=> { 
  console.log("Listener Called",arg);
});

//Raise an event
emitter.emit('messageLogged',{id:1, url:'https://'}); 
// arg stores the data of the event

//Example
// Raise:logging(data:message)

emitter.on('logging',(arg)=>{
    console.log(arg);
});

emitter.emit('logging',{id:1,username:'jayan'});

