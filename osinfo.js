var os = require('os');

console.log('Host:'+os.hostname());
console.log('Free Memory:'+os.freemem());

var toMegs = function(bytes)
{
    return bytes / 1024 / 1000;
}

module.exports.toMegs = toMegs;
module.exports.freemem = os.freemem;
