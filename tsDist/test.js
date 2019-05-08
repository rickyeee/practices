const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
	console.log('hi 1');
// emitter.emit('myEvent');
	
});

emitter.on('myEvent', () => {
  console.log('hi 2');
}); 

emitter.emit('myEvent');

var a = false
while(true) {
	a = !a;
}