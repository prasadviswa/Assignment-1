var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
   console.log('connection succesful.');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

eventEmitter.emit('connection');
console.log("Program Ended.");
eventEmitter.emit('data_received');