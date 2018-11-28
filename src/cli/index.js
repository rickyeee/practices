#!/usr/bin/env node
const process = require('child_process');
process.exec('mkdir test-dir',function (error, stdout, stderr) {
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});
process.exec('mv test-dir test-mv',function (error, stdout, stderr) {
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});

console.log('hello cli');