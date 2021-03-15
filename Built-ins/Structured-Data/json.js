// Built-ins

/**
 * Structured Data
 */

 JSON
// The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties, it has no interesting functionality of its own.

JSON.parse(text[, reviver])
// Parse the string text as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.


JSON.stringify(value[, replacer[, space]])
// Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined are replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.

