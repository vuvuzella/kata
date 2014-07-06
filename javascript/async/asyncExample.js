/*
 * asyncExample.js
 * a node application baesd on eloquent javascript's example
 *
 * Added Event driven notification of file reading...
 *
 */

var fs = require('fs');
var util = require('util');
var events = require('events');
var eventEmitter = new events.EventEmitter();

/* Custom events */
eventEmitter.on('event-readfile',function(next_func) {
    console.log(mails);
    if (next_func != null)
        next_func();
});

/**** -Begin- Asynchronous Functions ****/
/* File reading functions */
var mails;
var filename = 'readme.txt';
var receiveMails = function(fileName) {
    
    fs.readFile(fileName, function(err, data) {
        if (err) throw err;
        mails = data.toString();
        eventEmitter.emit('event-readfile');
    });
};
/**** -END- Asynchronous Functions ****/

/**** - Begin non asynchronous functions */
var printArray = function(arr) {
    console.log("continuing the normal operation");
    var split = arr.toString().split("\n");
    console.log(split);
};
var startsWith = function(arr, word) {      // Returns true if word is found.
                                            // Regardless the case.
    var split = arr.toString().split("\n"); // First, split by newLine
    for (var i = 0; i < split.length; i++) {
        var firstLine = split[i].split(" ");    // Second split each line by
        for (j in firstLine) {                  // space
            console.log(firstLine[j]);
            if(firstLine[j].toLowerCase() == word.toLowerCase())
                return true;                // Return true if word mathces
        }
    }
    return false;
};
/**** -END- non asynchronous functions ****/

/* Main */
setTimeout(function(){  // Execution is moved to the last of the exec stack
    /* set of asynchronous functions here that sets variables
     * or shoots out events..
     */

    /* Async functions */
    receiveMails(filename);

    /*
     * if some blocking functions require to wait for the finishing og 
     * certain events, put them in another setTimeout?
     */
    setTimeout(function() {
        printArray(mails.toString());  // printArray requires a finished receiveMails()
    }, 1000);
}, 1000);

/* The "thing" that will be seen by the user first */
console.log('Please wait while ' + filename + ' file is being read.");


