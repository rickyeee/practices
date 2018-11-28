process.send(process.pid);
process.on('message', (m: string):void => {
	console.log('来自父进程的消息', m);
	return;
})
console.log(process.memoryUsage())