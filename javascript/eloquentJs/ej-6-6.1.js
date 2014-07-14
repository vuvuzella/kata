function forEach(arrays, func) {
  for (var i in arrays)
    func(arrays[i]);
}

function reduce(combine, base, array) {
  forEach(array, function(element) {
     base = combine(base, element);
  });
  return base;
}

function add(a,b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}

/* Counting Zeros in an array using reduce as functional programming */
function isZero(a, b) {
  return (b === 0) ? ++a : a;	// not really readable is it?j
}

function countZero(arr_num) {
  return reduce(isZero,0, arr_num);
}

try {
	// print(sum([1,2,a]));
    print(countZero([1,2,4,2,0,0,3]));
} catch (err) {
  	print("Error!\nMessage: " + err.message);
}
