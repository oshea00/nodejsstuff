var util = require('util')
var EventEmitter = require('events').EventEmitter;

function Resource(n) {
    var maxEvents = n;
    var self = this;

    process.nextTick(function() {
        var count=0;
        self.emit('start');
        var t = setInterval(function (){
            self.emit('data',++count);
            if (count === maxEvents) {
                self.emit('end',count);
                clearInterval(t);
            }
        }, 10);
    });
};

util.inherits(Resource,EventEmitter);

module.exports = Resource;

