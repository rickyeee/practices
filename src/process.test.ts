// 测试父进程与子进程的关系
// 子进程有单独的进程id
const child = require('child_process');
const path = require('path')
console.log(process.pid)
const n = child.fork(path.resolve(__dirname, './test.js'))
for (var i = 0; i < 900000; i++) {
	var a = new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 9000000)
	})
}
console.log(process.memoryUsage(), process.pid)
n.on('message', (m) => {
  console.log('父进程收到消息12232：', m);
});
n.send({a: 2})
// // Causes the child to print: CHILD got message: { hello: 'world' }
// child.send({ hello: 'world' });