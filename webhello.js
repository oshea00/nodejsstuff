var http = require('http');
var osinfo = require('./osinfo');
http.createServer(function (req,res) {
  res.writeHead(200, {'Content-Type' : 'text/plain' });
  res.end('Hello World\n');
}).listen(process.env.PORT,process.env.IP);
console.log('Server running at '+process.env.IP+":"+process.env.PORT);
console.log('Free Memory (MB): '+osinfo.toMegs(osinfo.freemem()));
