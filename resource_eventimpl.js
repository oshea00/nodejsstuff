var Resource = require('./resource');

var n = new Resource(5);

n.on('start',function() {
  console.log("I've started.");   
});

n.on('data',function(d){
   console.log("   I got data -> " + d); 
});

n.on('end',function(t){
   console.log('I got '+t+' data events.'); 
});

