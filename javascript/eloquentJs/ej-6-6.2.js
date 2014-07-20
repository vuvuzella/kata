/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* Some utility functions */
function forEach(array, func) {
  for(var i in array) {
  	func(array[i]);
  }
}

function forWhile(array, condition, func) {
  for (var i = 0; (condition()) && (i < array.length); i++) {
    func(array[i]);
  }
}


function reduce(combineFunc, base, array) {
  forEach(array, function(elementAt) {
  	base = combineFunc(base, elementAt);
  });
  return base;
}

function map(genericFunc, array) {
  var newArray = [];
  forEach(array, function(elementAt) {
  	newArray.push(genericFunc(elementAt));
  });
  return newArray;
}

/* simple/static function */
function charCompare(x, elementAt) {
  return (x === elementAt) ? 1 : 0;
}
/* high-order function */
function limiter(x) {
  return function() {return (x <= 6) ? true: false;};
}

function modulusCounter(str_content) {
  var base = 0;
  forWhile(str_content, limiter(base), function(elementAt) {
    base += charCompare('%', elementAt);
  });
  return base;
}

var compare10 = charCompare(10);
print(modulusCounter("%%%%%%%%% This is the beginning", charCompare('%')));