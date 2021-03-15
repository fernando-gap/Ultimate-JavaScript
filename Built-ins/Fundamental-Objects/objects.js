// Built-ins

 /**
 * Fundamental Objects
 * */


// Objects

Object.assign(target, ...sources);
/*

connects the sources to the end of the
target and returns an new object.

*/


Object.create(obj);
/*

Creates a new object with the specified
prototype object and properties.

*/


Object.entries(obj);
/*

returns an array whose elements are arrays corresponding
to the enumerable string-keyed property [key, value] pairs
found directly upon object.

*/


Object.fromEntries(array);
/*

The method transforms a list of key-value pairs into an object.

*/


Object.freeze(obj);
/*

Nothing can be added to or removed from the properties
set of a frozen object. Any attempt to do so will fail,
either silently or by throwing a TypeError exception
(most commonly, but not exclusively, when in strict mode).

*/


Object.getPrototypeOf(obj);
/*

The method returns the prototype (i.e. the value of the
internal [[Prototype]] property) of the specified object.

*/
