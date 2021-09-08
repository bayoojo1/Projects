/**
 * The below is an example of closures in JavaScript. 
 * The global variable count is accessible to every other function in this script.
 * If function makeBirdCount is not defined as a closure with its own variable count declaration, it would depend on the global count variable, and both makeBirdCounter and countDogs functions would produce unexpected result.
 * NOTE: Every scope in a closure is separate. Which means when you create different variables with a closure, e.g. 
 * var birdCount = makeBirdCounter() and 
 * var birdCount1 = makeBirdCounter()
 * Calling these two variables would produce distinct result of counts and not a countinuation of results.
 * Closures are used to distribute software packages. e.g. jQuery, Moment.js, Underscore.js, Express Middleware 
 */


var count = 0;

function makeBirdCounter() { // Outer function
    var count = 0;
    return function() { // Inner function
        count++;
        return count + ' birds';
    }
}

function countDogs() {
    count++;
    return count + ' dogs';
}