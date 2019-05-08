// events 模块只提供了一个对象： events.EventEmitter。
// EventEmitter 的核心就是事件触发与事件监听器功能的封装。
// 你可以通过require("events");来访问该模块。

var util = require('util');
	var EventEmitter = require('events').EventEmitter;

	function MyEmitter() {
		EventEmitter.call(this);
	} // 构造函数

	util.inherits(MyEmitter, EventEmitter); // 继承

	var em = new MyEmitter();
	em.on('hello', function(data) {
		console.log('收到事件hello的数据:', data);
	}); // 接收事件，并打印到控制台
	em.emit('hello', 'EventEmitter传递消息真方便!');



