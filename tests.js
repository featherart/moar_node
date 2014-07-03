var util = require('util');

var a = {1: true, 2: false};
console.log(a);

console.log('this is a number: %d, and this is a string: %s, and this is an object in json: %j', 42, 'jasmine', a);

console.log(util.inspect(a));
