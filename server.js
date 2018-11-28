var http = require('http');
var url = require('url');
var _toString = Object.prototype.toString;
function testType(info) {
    console.log(info.name);
} 


var server = http.createServer(function (req, res) {
		res.send('proxy success')
    // console.log(typeof req.body);
    if (req.url === '/favicon.ico')
        return;
    if (req.url === '/get') {
        console.log(_toString.call(url.parse(req.url, true).query), 'get');
        console.log(url.parse(req.url, true).query);
    }     
    else {
        // post请求
        var alldata_1 = '';
        req.on('data', function (chunk) {
            console.log(_toString.call(chunk));
            console.log(Buffer.isBuffer(chunk));
            console.log(chunk.length);
            alldata_1 += chunk;
            try {
                testType(JSON.parse(alldata_1));
						} 
						
            catch (e) {
                console.log(e);
            }
        });
        // console.log(alldata, '----post data')
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ code: 200, data: { a: 1 } }));
});
server.on('listening', function () {
    console.log('server is listening on port: 8980');
});

 


server.listen(8980);
 


