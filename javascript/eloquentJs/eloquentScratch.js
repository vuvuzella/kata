/*
 * eloquentScratch.js
 * an implementation of the things said in eloquent javascript.
 *
 */

function forEach(array, func) {
    for(var i in array) {
        func(array[i]);
    }
}

function sum(a,b) {
    return a + b;
}

function arrayTotal(array) {
    var total = 0;
    
    forEach(array, function(num) {
        total = sum(total, num);
    });

    return total;
}

function makeAddFunc(constant, funcType) {
    switch(funcType) {
        case 'conventional':
            return function(num) {
               return num + constant; 
            };
        case 'reduce':
            return function(num) {
                return reduce.apply(null, [function(a, b) { // apply is documented in js
                    return a + b;
                }, 0 + constant, num]);
            };
        default:
            console.log("invalid function type");
            return null;
    }
}

function reduce(combine, base, array) {
    forEach(array, function(elementAt) {
        base = combine(base, elementAt);
    });
    return base;
}

function countZeros(arr_num) {
    return reduce(function(base,elementAt) {
        if(elementAt == 0) {
            base++;
        }
        return base;
    }, 0, arr_num);

}

function countOccurrence(arr_num, item) {
    var compare = function(base, elementAt){
        return (elementAt == item) ? base+1: base;
    };
    return reduce(compare, 0, arr_num);
}

function count(testFunc, arr_num) {
    return reduce(function(total, elementAt) {
        return total + (testFunc(elementAt)?1:0);
    }, 0, arr_num);
}

/* explanation for the test function:
 * when testFunc(x) used as an argument for count and it (testFunc) being 
 * called INSIDE count are different!!
 * in Argument, an ANONYMOUS function was SET and DEFINED, but NOT YET 
 * executed.
 * inside count(), when testFunc() is executed, it is the anonymous function
 * is called and executed, evaluating the expression/function in it's return
 * value. scoping rules still apply here, so the 'x' argument in testFunc(x)
 * is still accessible during evaluation of the return expression, which is
 * an anonymous function.
 *
 * get it??
 * all this mambo jumbo just to have a shorter expression inside count() fn.
 * (the testFunc(elementAt) part).
 */
function testFunc(item) {
    return function(elementAt) {return item === elementAt};
}

function map(func, arr) {
    var newArray = [];
    forEach(arr, function(elementAt) {
        newArray.push(func(elementAt));
    });
    return newArray;
}

function appnd(something) {
    return function(elementAt) { return something + elementAt; };
}

// var addThreeReduce = makeAddFunc(5, 'reduce');
// console.log(addThreeReduce([1,1,0]));

// console.log(countZeros([0,0,30,2,3,0,1,3,2,0]));
// console.log(countOccurrence([0,0,30,2,3,0,1,3,2,0], 30));
// console.log(count(testFunc(30), [0,0,30,2,3,0,1,3,2,0]));
console.log(map(appnd('haha'), [1,2,3]));
