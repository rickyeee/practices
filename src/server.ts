const http = require('http');
const url = require('url');
const _toString = Object.prototype.toString;

interface Info {
	name: string,
	age: number
}
function testType(info: Info) {
	console.log(info.name);
}

const server = http.createServer((req, res) => {
	http.request(req, () => {
		console.log('request success')
	})
	// console.log(typeof req.body);
	if (req.url === '/favicon.ico') return;
	if (req.url === '/get') {
		console.log(_toString.call(url.parse(req.url, true).query), 'get');
		console.log(url.parse(req.url, true).query);
	} else {
		// post请求
		let alldata = '';
		req.on('data', function (chunk) {
			console.log(_toString.call(chunk))
			console.log(Buffer.isBuffer(chunk))
			console.log(chunk.length)
			alldata += chunk;
			try {
				testType(JSON.parse(alldata));
			} catch(e) {
				console.log(e);
			}
		});
		// console.log(alldata, '----post data')
		
	}
	
	
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({code: 200, data: {a: 1}}));
});

server.on('listening', () => {
	console.log('server is listening on port: 8989')
})

server.listen(8989);