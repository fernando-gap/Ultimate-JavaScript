// Built-ins test

/**
 * Values Properties
 */

const TYPE_UNDEFINED = undefined;
const TYPE_NAN = NaN;
const TYPE_INFINITY = Infinity;


// Shows their types
console.log(
	typeof TYPE_UNDEFINED,
	typeof TYPE_NAN,
	typeof TYPE_INFINITY
);

// output: undefined number number


const NaN_Effect = 10 + undefined;
const NaN_Effect2 = 10 + null; 

console.log(NaN_Effect, NaN_Effect2);
// output: NaN 10

/* 

Null is interpreted as a number and your default value
is 0

*/

const INFINITY_TEST = Number.MAX_VALUE * 1.1;
console.log(INFINITY_TEST);

// output: Infinity


let globalThis = this;

console.log(typeof globalThis);
// output: object


/*

If this is an object then we can add properties.

*/

globalThis.example = 'hello!';
console.log(globalThis);
// output: { example: 'hello!' }

/* 

We can reference the properties that's are created. 
You got a flexible code using it.

*/

globalThis.printExample = function() {
	return this.example;
}

console.log(globalThis.printExample());
// output: hello!
