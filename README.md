# poly-find
Polymorphic curried list lookup for functional style JS

## Motivation
Javascript isn't very consistent when it comes to lists. Native list processing functions only work with arrays, not with objects. Neverhtless, objects are being used as lists as often because of their amazing ability to provide non-numerical indexes to their elements. So, every time we want to find an element in an object-based collection (say, coming from an AJAX request), we have to write almost identical loops in order to perform that operations.

Poly-find works equally well with both arrays and objects so you never have to write those annoying loops again.

## Features
- Works with objects and arrays
- Automatically curried

## Installation

```
npm install poly-find
```

## Usage

```javascript
var find = require('poly-find');

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

// Basic find
var result = find(greaterThen100, object);
// -> 200

result = find(greaterThen100, array);
// -> 200


// Pipeline-style usage
getDataAsPromise()
    .then(find(greaterThen100))
    .then(console.log)
// -> 200
```

