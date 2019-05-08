const debug = require('debug')('test');

setImmediate(function(){
	console.log(1);
	debug('setImmediate %o', 1);
},0);
setImmediate(function(){
	console.log(9);
	debug('setImmediate %o', 2);
},0);
setTimeout(function(){
	console.log(2);
	debug('setTimeout %o', 1);
},0);
new Promise(function(resolve){
	console.log(3);
	debug('Promise %o', 3);

	resolve();
	console.log(4);
	debug('Promise %o', 4);

}).then(function(){
	console.log(5);
	debug('Promise %o', 5);
});
console.log(6);
debug('global %o', 6);
setImmediate(function(){
	console.log(7);
	debug('setImmediate %o', 7);
},0);
process.nextTick(function(){
	console.log(10);
	debug('nextTick %o', 10);
});
console.log(8);
debug('sync %o', 8);
