var curry = require("curry");

function find(func) {
  return function (list) {
    for (var i in list) {
      if (func(list[i])) {
        return list[i];
      }
    }

    return undefined;
  };
}

module.exports = curry(find);
