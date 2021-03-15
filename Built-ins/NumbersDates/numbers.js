// Built-ins

/**
 * Numbers & Dates
 */


/*

Numbers has a length 9007199254740992 or 2^53 - 1

*/

const epsilon = Number.EPSILON;
/*

The  property represents the difference between 1 and the
smallest floating point number greater than 1.

*/


const max_safe_integer = Number.MAX_SAFE_INTEGER;
/*

The Number.MAX_SAFE_INTEGER constant represents the maximum
safe integer in JavaScript (2^53 - 1).

*/


const min_safe_integer = Number.MIN_SAFE_INTEGER;
/*

The same as MAX_SAFE_INTEGER but with negative sign.
((2)^-53 - 1).

*/


const max_value = Number.MAX_VALUE;
/*

The Number.MAX_VALUE property represents the maximum numeric
value representable in JavaScript.

*/


const min_value = Number.MIN_VALUE;
/*

The Number.MIN_VALUE property represents the minimum numeric
value representable in JavaScript.

*/


Number.isInteger(num);
/*

Determines if the num passed is an integer, returns
true otherwise returns false.

*/


Number.isSafeInteger(num);
/*

Determine whether the passed value is a safe integer
(number between -(2^53 - 1) and 2^53 - 1).

*/
