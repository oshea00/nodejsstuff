// Stream stuff  - request
var request = require('request');
var zlib = require('zlib');
var fs = require('fs');

var s = request('http://www.pluralsight.com/');

s.on('data', function(chunk){
    console.log(">>Data>>> "+chunk);    
});

s.on('end',function(){
    console.log("<<<Done>>>");
})

// process stdout stdin 
console.log('sdout is writeable? '+process.stdout.writable);

request('http://www.pluralsight.com/').pipe(process.stdout);

// gzip - oooh   zcat command too!
request('http://www.pluralsight.com/')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('pluralsight.html.gz'));
    



