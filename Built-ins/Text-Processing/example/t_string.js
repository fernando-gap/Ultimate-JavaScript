const string = "This is a simple text case, keep it in your mind.";


// CharAt();

console.log(string.charAt(0));
// output: I


// concat()

console.log(string.concat(' This is so bad.'));
/**
 * output: This is a simple text case, keep it in your mind.
 * This is so bad.
 */


// includes();

console.log(string.includes('keep'));
// output: true


// endsWith();

console.log(string.endsWith('.'));
// output: true

console.log(string.endsWith('d', string.length-1));
// output: true

/**
 * the second parameter determines which the length of the last 
 * thing.
 */

console.log(string.endsWith('n', string.length-1));
// output: false


//indexOf()

console.log(string.indexOf('This'));
// output: 0

/**
 * If nothing has found then the 
 * return value is -1
 */

console.log(string.indexOf('keep', 2));
// output: -1


// match();

const regexp = /t[a-z]*s/gi;

console.log(string.match(regexp));
// output: [ 'This' ]


// matchAll()

const regexp2 = /[a-z][^\s]*/gi;

let iterator = string.matchAll(regexp2);

for (let i of iterator) {
	console.log(i[0]);
}
/**
 * output: 
 *
 * This
 * is
 * a 
 * simple 
 * text 
 * case,
 * keep
 * it
 * in
 * your 
 * mind.
 */


// repeat()

console.log('Hello, world! '.repeat(2));
// output: Hello, world! Hello, world!


// replace()

const str = "Hello, !dlrow";

console.log(str.replace(/!dlrow/, 'world!'));
// output: Hello, world!


// replaceAll()

const str2 = "Hexxo, worxd!";

console.log(str2.replaceAll('x', 'l'));
// output: Hello, world!


// search()

const regexp3 = /simple/;
console.log(string.search(regexp3));
// output: 10


// slice()

let cut = string.slice(5, 22);
console.log(cut)
// output: is a simple text


// split()

const sep = string.split(' ', 5);
console.log(sep);
// output: [ 'This', 'is', 'a', 'simple', 'text' ]


// substr()

console.log(string.substr(28))
// output: keep it in your mind.

console.log(string.substr(28, 4));
// output: keep


// trim()

const strTest = '  Hello world!     ';
console.log(strTest, 'Yes.')
//output:   Hello world!      Yes

console.log(strTest.trim(), 'Yes.');
// output: Hello world! Yes.
