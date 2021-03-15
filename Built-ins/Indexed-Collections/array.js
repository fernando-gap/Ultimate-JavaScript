// Built-ins

/**
 * Indexed Collections
 */

let arr = new Array("element1", "element2");
let arr = ["elem1", "elem2"];
// Constructors

Array.from(ArrayLike, Mapfn, thisArg);
/*

The Array.from() static method creates a new, shallow-copied
Array instance from an array-like or iterable object.

*/

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

