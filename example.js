var find = require('./index');

var object = {
  a: 100,
  b: 200,
  c: 300,
  d: 400
};

var array = [100, 200, 300, 400];

function greaterThen100(number) {
  return number > 100;
}

// Complete application
console.log(find(greaterThen100, object));
console.log(find(greaterThen100, array));


// Partial application
var firstLargeNumber = find(greaterThen100);
console.log(firstLargeNumber(object));
console.log(firstLargeNumber(array));
