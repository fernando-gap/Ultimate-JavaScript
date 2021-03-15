// Built-ins

/**
 * Fundamental Objects
 */

Function.prototype.apply(thisArg [, argsArray]);
/*

The apply(); method calls a function with a given this
value, and arguments provided as an array (or an
array-like object).

*/


Function.prototype.bind(thisArg, [arg1 [, arg2 [, arg3]]]);
/*

The bind(); method creates a new function that, when called,
has its this keyword set to the provided value, with a given
sequence of arguments preceding any provided when the new
function is called.

*/


Function.prototype.call(this, args);
/*

The call(); method calls a function with a given this value and
arguments provided individually.

*/


Function.prototype.toString(func);
/*

The toString(); method returns a string representing the
source code of the function.

*/
