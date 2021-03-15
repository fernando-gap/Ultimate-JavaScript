// Built-ins

/**
 * Values Properties
 * */


Infinity
/* Represents belong max number
and it's read-only */


NaN
/* Represents a value which is
(N)ot (a) (N)umber */


undefined
/* undefined is a primitive value
automatically assigned to variables
that have just been declared,
or to formal arguments for which
there are no actual arguments. */


this
/* Is used to access global objects */


/**
 * Function Properties
 * */


isFinite(testValue);
/* Verify if the number passed is a
finite value or not */


isNaN(value);
/* Verify if the number passed is a
NaN and return true or false */


parseFloat(string);
/* return a floating number, if the arg passed
is a number, the function will transform into
a string if needed */


parseInt(string [, radix]);
/* The function parses a string argument and
returns an integer of the specified radix (the base
in mathematical numeral systems). */


decodeURI(encodedURI);
/* Decode a URI if is created by encodeURI or by
a similar. */


decodeURIComponent(encodedURI);
/* The decodeURIComponent(); function decodes a
Uniform Resource Identifier (URI) component previously
created by encodeURIComponent or by a similar routine. */


encodeURI(URI);
/* The encodeURI(); function encodes a URI by replacing
each instance of certain characters by one, two, three,
or four escape sequences representing the UTF-8 encoding of the character
(will only be four escape sequences for characters composed of two "surrogate" characters). */


encodeURIComponent(string);
/* Encode a component of an URI */


/**
 * Fundamental Objects
 * */


// Objects

Object.assign(target, ...sources);
/* connects the sources to the end of the
target and returns an new object. */


Object.create(obj);
/* Creates a new object with the specified
prototype object and properties. */


Object.entries(obj);
/* returns an array whose elements are arrays
corresponding to the enumerable string-keyed
property [key, value] pairs found directly upon object. */


Object.fromEntries(array);
/* The method transforms a list of key-value pairs into an object. */


Object.freeze(obj);
/* Nothing can be added to or removed from the properties
set of a frozen object. Any attempt to do so will fail, either
silently or by throwing a TypeError exception
(most commonly, but not exclusively, when in strict mode). */


Object.getPrototypeOf(obj);
/* The method returns the prototype (i.e. the value of the
internal [[Prototype]] property) of the specified object. */

// Functions

Function.prototype.apply(thisArg [, argsArray]);
/* The apply(); method calls a function with a given this value,
and arguments provided as an array (or an array-like object). */


Function.prototype.bind(thisArg, [arg1 [, arg2 [, arg3]]]);
/* The bind(); method creates a new function that, when called,
has its this keyword set to the provided value, with a given
sequence of arguments preceding any provided when the new function is called. */


Function.prototype.call(this, args);
/* The call(); method calls a function with a given this value and
arguments provided individually. */


Function.prototype.toString(func);
/* The toString(); method returns a string representing the
source code of the function. */


// Symbols

/* Symbols cannot be  recreated, it's need to be unique of
each declarations. The best use for is as Object property. */

Symbol(description);
/* Creates a unique symbol */


/**
 * Number & Dates
 */


//Numbers

/* Numbers has a length 9007199254740992 or 2^53 - 1 */

Number.EPSILON
/* The  property represents the difference between 1 and the
smallest floating point number greater than 1. */


Number.MAX_SAFE_INTEGER | Number.MIN_SAFE_INTEGER
/* The Number.MAX_SAFE_INTEGER constant represents the maximum
safe integer in JavaScript (253 - 1). */


Number.MAX_VALUE | Number.MIN_VALUE
/* The Number.MAX_VALUE property represents
the maximum numeric value representable in JavaScript. */


Number.isInteger(num);
/* Determines if the num passed is an integer */


Number.isSafeInteger(num);
/* Determine whether the passed value is a safe integer
(number between -(2^53 - 1) and 2^53 - 1). */


// BigInt

/* If we want to pass of this value 9007199254740992 we need
 * to use the BigInt JavaScript data type. */

BigInt(value) // x_n

/* The problem of bigint is the unsoported capability of work
with operators such as + - ** etc.. but works with bitwise operators
I think */


// Mat


Math.PI
/* Return the value of PI aproximately 3.141592653589793 */

Math.abs(x);
/* Return the absolute value of a given number */

Math.cbrt(x);
/* The cube root of the given number. */

Math.ceil(x);
/* The smallest integer greater than or equal to the given number.
Rounds the number to greater than the x*/

Math.floor(x);
/* A number representing the largest integer less than or equal to
the specified number. Rounds the number to less than x*/

Math.cos(x);
/* The Math.cos(); static function returns the cosine of the
specified angle, which must be specified in radians.
This value is length adjacent length hypotenuse . */

Math.log2(x);
/* The base 2 logarithm of the given number. If the number is negative, NaN is returned. */

Math.max(x, [array]);
/* returns the max number */

Math.min(x, [array]);
/* return the min number */

Math.pow(x, y);
/* Returns base x to the exponent power y (that is, x^y). */

Math.random();;
/* return a pseudo-random number between 0 and 1; */

Math.round(x);
/* Rounds the number to the nearest integer */

Math.sqrt(x);
/* Returns the square root of x */

Math.tan(x);
/* Returns the tangent of x */

Math.trunc(x);
/* The Math.trunc(); function returns the integer part of
a number by removing any fractional digits. */


// Date

Date();
/* When called as a function, returns a string representation
of the current date and time, exactly as new Date();.toString(); does. */

Date.now();
/* Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored. */

Date.prototype.getDate();
/* Returns the day of the month (1–31) for the specified date according to local time. */

Date.prototype.getDay();
/* Returns the day of the week (0–6) for the specified date according to local time. */


Date.prototype.getFullYear();
/* Returns the year (4 digits for 4-digit years) of the specified date according to local time */


Date.prototype.getHours();
/* Returns the hour (0–23) in the specified date according to local time.*/

// Other options is
// get: Milliseconds , Minutes , Month , Time


Date.prototype.setDate();
// Sets the day of the month for a specified date according to local time.

Date.prototype.setFullYear();
// Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

Date.prototype.setHours();
// Sets the hours for a specified date according to local time.

Date.prototype.setMilliseconds();
// Sets the milliseconds for a specified date according to local time.

Date.prototype.setMinutes();
// Sets the minutes for a specified date according to local time.

Date.prototype.setMonth();
// Sets the month for a specified date according to local time.

Date.prototype.setSeconds();
// Sets the seconds for a specified date according to local time.

Date.prototype.setTime();
// Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.


/**
 * Text Processing
 */


// String


String.prototype.charAt(index)
// Returns the character (exactly one UTF-16 code unit) at the specified index.


String.prototype.concat(str [, ...strN ])
// Combines the text of two (or more) strings and returns a new string.


String.prototype.includes(searchString [, position])
// Determines whether the calling string contains searchString.


String.prototype.endsWith();;
// The endsWith(); method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.


String.prototype.indexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.


String.prototype.match(regexp)
// Used to match regular expression regexp against a string.


String.prototype.matchAll(regexp)
// Returns an iterator of all regexp's matches.


String.prototype.repeat(count)
// Returns a string consisting of the elements of the object repeated count times.


String.prototype.replace(searchFor, replaceWith)
// Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.


String.prototype.replaceAll(searchFor, replaceWith)
// Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.


String.prototype.search(regexp)
// Search for a match between a regular expression regexp and the calling string.



String.prototype.slice(beginIndex[, endIndex])
// The slice(); method extracts a section of a string and returns it as a new string, without modifying the original string.


String.prototype.split([sep [, limit] ])
// Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.


String.prototype.substr();
// Returns the characters in a string beginning at the specified location through the specified number of characters.

String.prototype.trim();
// Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.



// RegExp


/* The RegExp object is used for matching text with a pattern. */

new RegExp('(\w)*.asp');
// This is a explicit constructor of a RegExp

RegExp.prototype.exec()
// Executes a search for a match in its string parameter.

RegExp.prototype.test()
// Tests for a match in its string parameter.



/**
 * Indexed Collections
 */



// Arrays


let arr = new Array("element1", "element2");
let arr = ["elem1", "elem2"];
// Constructors

Array.from(ArrayLike, Mapfn, thisArg);
/* The Array.from() static method creates a new, shallow-copied
Array instance from an array-like or iterable object. */

Array.isArray(array);
/* Returns true or false if the arg passed is an array */

Array.prototype.concat();
/* The concat() method is used to merge two or more arrays. This method does
 * not change the existing arrays, but instead returns a new array.  */
// const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])


Array.prototype.copyWithin();
/* The copyWithin() method shallow copies part of an array to another location
 * in the same array and returns it without modifying its length. */
// arr.copyWithin(target[, start[, end]])


Array.prototype.fill();
/* The fill() method changes all elements in an array to a static value,
from a start index (default 0) to an end index (default array.length). It returns the modified array.  */
// arr.fill(value[, start[, end]])


Array.prototype.filter();
/* The filter() method creates a new array with all elements
that pass the test implemented by the provided function. */

/*
let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
*/


Array.prototype.find();
/* The find() method returns the value of the first element in the provided array that satisfies
 * the provided testing function. If no values satisfy the testing function, undefined is returned. */
// arr.find(callback(element[, index[, array]])[, thisArg])


Array.prototype.findIndex();
/* The findIndex() method returns the index of the first element in the array that satisfies
 * the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. */
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])


Array.prototype.forEach();
/* The forEach() method executes a provided function once for each array element.  */

/*
arr.forEach(callback(currentValue[, index[, array]]) {
  // execute something
}[, thisArg]);
*/

Array.prototype.includes();
/* The includes() method determines whether an array includes a
 certain value among its entries, returning true or false as appropriate. */
// arr.includes(valueToFind[, fromIndex])


Array.prototype.indexOf();
/* The indexOf() method returns the first index at which a given element
can be found in the array, or -1 if it is not present. */
// arr.indexOf(searchElement[, fromIndex]);


Array.prototype.pop()
// Removes the last element from an array and returns that element.


Array.prototype.push()
// Adds one or more elements to the end of an array, and returns the new length of the array.


Array.prototype.unshift();
// Adds one or more elements to the front of an array, and returns the new length of the array.


Array.prototype.shift()
// Removes the first element from an array and returns that element.


Array.prototype.join()
// Joins all elements of an array into a string.


Array.prototype.keys();
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.


Array.prototype.lastIndexOf();
/* The lastIndexOf() method returns the last index at which a given element
can be found in the array, or -1 if it is not present. The array is searched backwards,
starting at fromIndex. */


Array.prototype.map();
/* The map() method creates a new array populated with the results of calling
a provided function on every element in the calling array. */
/* let newArray = arr.map(callback(currentValue[, index[, array]]) {
// return element for newArray, after executing something
}[, thisArg]); */


Array.prototype.reduce();
/* The reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in single output value. */
// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])


Array.prototype.reverse();
/* The reverse() method reverses an array in place. The first array element becomes
the last, and the last array element becomes the first. */


Array.prototype.splice()
/* Adds and/or removes elements from an array. */
// let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])


Array.prototype.slice();
/* The slice() method returns a shallow copy of a portion of an array into a new array
object selected from start to end (end not included) where start and end represent the
index of items in that array. The original array will not be modified. */

// slice()
// slice(start)
// slice(start, end)


/**
 * Keyed Collections
 */

// Map

/* A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration. */

// Constructor
const map = new Map();

// Instance Properties

Map.prototype.size
// Show the size of a map

Map.prototype.clear();
// Remove all key/value pairs of a map
// Syntax myMap.clear();

Map.prototype.delete();
// Remove a key/value pairs that are specified
// Syntax myMap.delete(key);

Map.prototype.get();
// The get() method returns a specified element from a Map object


Map.prototype.has();
// The has() method returns a boolean indicating whether an element with the specified key exists or not.


Map.prototype.set();
/* The set() method adds or updates an element with a specified key and a value to a Map object. */


// Set
/* The Set object lets you store unique values of any type, whether primitive values or object references. */

/* Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection. */

// Constructors
const set = new Set(['this', 'need', 'to', 'be', 'an', 'array', '!']);

Set.prototype.add(value);
// The add() method appends a new element with a specified value to the end of a Set object.

Set.prototype.size
// Returns the number of values in the Set object.

Set.prototype.clear()
// Removes all elements from the Set object.

Set.prototype.delete(value)
// Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.

Set.prototype.has(value)
// Returns a boolean asserting whether an element is present with the given value in the Set object or not.


/**
 * Structured Data
 */

ArrayBuffer
/* The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. */

// It is an array of bytes, often referred to in other languages as a "byte array".You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

SharedArrayBuffer
// The SharedArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer, similar to the ArrayBuffer object, but in a way that they can be used to create views on shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.


Atomics // The Atomics object provides atomic operations as static methods. They are used with SharedArrayBuffer and ArrayBuffer objects.
// The Atomic operations are installed on an Atomics module. Unlike the other global objects, Atomics is not a constructor. You cannot use it with a new operator or invoke the Atomics object as a function. All properties and methods of Atomics are static (as is the case with the Math object, for example).
//

DataView
// The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer, without having to care about the platform's endianness.
// Multi-byte number formats are represented in memory differently depending on machine architecture — see Endianness for an explanation. DataView accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.


JSON
// The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.

JSON.parse(text[, reviver])
// Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.


JSON.stringify(value[, replacer[, space]])
// Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined are replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.

/**
 * Control Abstraction
 */

Generator, GeneratorFunction, function*, async function
// Will discuss later

Promise
/* The Promise object represents the eventual completion (or failure)
of an asynchronous operation and its resulting value. */

const promise = new Promise((resolve, reject) => { /* Body function */ });
// Syntax - new Promise(executor);

Promise.all([promises, promises]);
// Syntax - Promise.all(iterable);A

/* The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error. */


Promise.allSettled();

// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

// Syntax - Promise.allSettled(iterable);


Promise.any();

// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors. Essentially, this method is the opposite of Promise.all().

// Syntax - Promise.any(iterable);

// This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.


Promise.race()
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

// Syntax - Promise.race(iterable);


Promise.reject(reason);
// The Promise.reject() method returns a Promise object that is rejected with a given reason.


Promise.resolve(value);
// Promise.resolve()
// The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.


